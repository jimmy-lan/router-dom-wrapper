import React, { FunctionComponent, PropsWithChildren } from "react";
import { Route, RouteProps } from "react-router-dom";
import { usePermissionsContext } from "../hooks";
import { defaultValues } from "../config";
import { PermissionsContextConfig } from "../types";
import { handleRedirectOrComponentField } from "../utils";

interface ProtectedRouteProps extends RouteProps {
  /**
   * When specified, use the specified handles over the globally
   * configured permission handles.
   */
  handles?: PermissionsContextConfig["handles"];
  /**
   * A custom-defined permission indicator representing acceptable user
   * permissions allowed to access this route.
   *
   * This value will be passed to `checkAccessRight` function when needed
   * to determine if the user is allowed to access the current route.
   */
  permissions: unknown;
  /**
   * Indicate that this route is added by `<ConfiguredRoutes />` component
   * or equivalent. You normally do not need to set this prop. If you find
   * yourself in a situation that you want to set this prop, please raise
   * this situation to the issues page of this library.
   */
  isConfiguredRoute?: boolean;
}

type Props = ProtectedRouteProps;

/**
 * Given props to a protected route, return the appropriate component to
 * render inside of `<Route />`.
 * @param props Props for a `<ProtectedRoute />` component.
 */
const useProtectedComponent = (props: PropsWithChildren<Props>) => {
  const { permissions, handles, isConfiguredRoute, children } = props;
  const {
    shouldRenderForbidden,
    checkAuthentication,
    checkAccessRight,
    handles: contextHandles,
  } = usePermissionsContext();

  const unauthorizedHandle =
    handles?.unauthorized ||
    contextHandles?.unauthorized ||
    defaultValues.handles.unauthorized;
  const forbiddenHandle =
    handles?.forbidden ||
    contextHandles?.forbidden ||
    defaultValues.handles.forbidden;

  if (!checkAuthentication()) {
    return handleRedirectOrComponentField(unauthorizedHandle);
  }
  if (shouldRenderForbidden || !isConfiguredRoute) {
    // We will enter this block if one of the following occurs:
    // - (1) This route is rendered by a `<ConfiguredRoutes />` component.
    //   In this case, we need to check for permission because the
    //   ConfiguredRoutes component won't do this with `shouldRenderForbidden`;
    // - (2) This route is constructed by the user. In this case, the
    //   `<ConfiguredRoutes />` component is missing, and hence the permission
    //   checking logic should be included.
    if (!checkAccessRight(permissions)) {
      return handleRedirectOrComponentField(forbiddenHandle);
    }
  }

  return children;
};

/**
 * A route where the user must be authenticated to access. If the user is
 * not authenticated and attempted to access this route, the user will be
 * redirected to `redirectUrl` that you specified.
 *
 * When redirected, `state` key in the location descriptor will be updated to
 * include the location that the user attempted to visit. You can access
 * `state.from` in the location descriptor to obtain this location.
 * You can read more about how the location descriptor looks like using this
 * link {@link https://reactrouter.com/web/api/location}.
 *
 * For example, you can show a "LogIn" component on URL `redirectUrl`. In your
 * "LogIn" component, you can tell where the user was redirected from by using
 * the following:
 *
 * ```
 * const descriptor = useLocation<{ from: string }>();
 * if (descriptor.state?.from) {
 *   console.log(`You were redirected from the URL ${descriptor.state.from}.`)
 * } else {
 *   console.log("You came directly to this component.")
 * }
 * ```
 *
 * @constructor
 * @param {ProtectedRouteProps} props
 * @see https://reactrouter.com/web/api/location
 */
const ProtectedRoute: FunctionComponent<Props> = (
  props: PropsWithChildren<ProtectedRouteProps>
) => {
  const { permissions, handles, isConfiguredRoute, children, ...otherProps } =
    props;
  const componentToRender = useProtectedComponent(props);

  return <Route {...otherProps}>{componentToRender}</Route>;
};

export { ProtectedRoute };

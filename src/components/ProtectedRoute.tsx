import React, { FunctionComponent, PropsWithChildren } from "react";
import { Route, RouteProps, Redirect, useHistory } from "react-router-dom";
import { usePermissionsContext } from "../hooks";
import { defaultValues } from "../config";
import { PermissionsContextConfig } from "../types";

interface ProtectedRouteProps extends RouteProps {
  /**
   * If specified, use this redirect config over the global redirect config
   * live in context.
   */
  redirect?: PermissionsContextConfig["redirect"];
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
  const { redirect, permissions, isConfiguredRoute, children, ...otherProps } =
    props;
  const {
    shouldRenderForbidden,
    checkAuthentication,
    checkAccessRight,
    redirect: contextRedirect,
  } = usePermissionsContext();
  const { location } = useHistory();

  let shouldAllowAccess = checkAuthentication();
  let redirectToLocation =
    redirect?.unauthorized ||
    contextRedirect?.unauthorized ||
    defaultValues.redirect.unauthorized;

  // When forbidden routes are put into the DOM tree, the redirect decision
  // must be made in individual `<ProtectedRoute />` components. Also, if this
  // route is not added by `<ConfiguredRoutes />` or equivalent, the logic
  // of skipping forbidden routes are not present, and hence permission checks
  // are needed.
  if (shouldRenderForbidden || !isConfiguredRoute) {
    shouldAllowAccess = checkAccessRight(permissions);
    if (!shouldAllowAccess) {
      redirectToLocation =
        redirect?.forbidden ||
        contextRedirect?.forbidden ||
        defaultValues.redirect.forbidden;
    }
  }

  return (
    <Route {...otherProps}>
      {shouldAllowAccess ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: redirectToLocation,
            state: { from: location },
          }}
        />
      )}
    </Route>
  );
};

export { ProtectedRoute };

import React, { FunctionComponent, PropsWithChildren } from "react";
import { Route, RouteProps, Redirect, useHistory } from "react-router-dom";
import { usePermissionsContext } from "../hooks";

interface ProtectedRouteProps extends RouteProps {
  /**
   * Route url to redirect user if user is not authenticated.
   * If this prop is specified, this prop will be used. If this
   * prop is empty, config.unauthRedirectRoute attribute will be
   * used.
   */
  redirectUrl?: string;
  /**
   * A custom-defined permission indicator representing acceptable user
   * permissions allowed to access this route.
   *
   * This value will be passed to `checkAccessRight` function when needed
   * to determine if the user is allowed to access the current route.
   */
  permissions: unknown;
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
  const { redirectUrl, permissions, children, ...otherProps } = props;
  const { shouldRenderForbidden, checkAuthentication, checkAccessRight } =
    usePermissionsContext();
  const { location } = useHistory();

  const isAuthenticated = checkAuthentication();
  let shouldAllowAccess = isAuthenticated;
  if (shouldRenderForbidden) {
    const isAccessAllowed = checkAccessRight(permissions);
  }

  const redirectPathname = redirectUrl;

  return (
    <Route {...otherProps}>
      {shouldAllowAccess ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: redirectPathname,
            state: { from: location },
          }}
        />
      )}
    </Route>
  );
};

export { ProtectedRoute };

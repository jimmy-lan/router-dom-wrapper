import React, { FunctionComponent, PropsWithChildren } from "react";
import { Route, RouteProps, Redirect, useHistory } from "react-router-dom";

interface ProtectedRouteProps extends RouteProps {
  /**
   * Route url to redirect user if user is not authenticated.
   * If this prop is specified, this prop will be used. If this
   * prop is empty, config.unauthRedirectRoute attribute will be
   * used.
   */
  redirectUrl?: string;
}

type Props = ProtectedRouteProps;

/**
 * A route where the user must be authenticated to access. If the user is
 * not authenticated and attempted to access this route, the user will be
 * redirected. <br/>
 *
 * When redirected, `state` key in the location descriptor will be updated to
 * include the location that the user attempted to visit. You can access
 * `state.from` in the location descriptor to obtain this location.
 * You can read more about how the location descriptor looks like using this
 * link {@link https://reactrouter.com/web/api/location}.
 *
 * @param props See {@link ProtectedRouteProps}.
 * @see https://reactrouter.com/web/api/location
 */
const ProtectedRoute: FunctionComponent<Props> = (
  props: PropsWithChildren<ProtectedRouteProps>
) => {
  const { children, redirectUrl, ...otherProps } = props;
  // TODO Call a pre-configured verify permission helper passed
  //  in by the user to determine if the user is authenticated.
  const isAuthenticated = true;

  const { location } = useHistory();

  return (
    <Route {...otherProps}>
      {isAuthenticated ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: redirectUrl,
            state: { from: location },
          }}
        />
      )}
    </Route>
  );
};

export { ProtectedRoute };

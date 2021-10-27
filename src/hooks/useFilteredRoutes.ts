import { RouteEntry } from "../types";
import { usePermissionsContext } from "./usePermissionsContext";

/**
 * Filter `routes` configuration and keep only the routes that needs to
 * be rendered.
 * @param routes Routes to filter.
 */
export const useFilteredRoutes = (routes: RouteEntry[]) => {
  const { shouldRenderForbidden, checkAuthentication, checkAccessRight } =
    usePermissionsContext();

  if (shouldRenderForbidden) {
    return routes;
  }
  if (!checkAuthentication()) {
    /*
     * When the user is not authenticated, we don't know what permissions this
     * user possesses. When returning all the routes, individual route will
     * see that the user is unauthorized and will redirect the user to the
     * unauthorized route configured in the permissions context.
     */
    return routes;
  }

  return routes.filter((route: RouteEntry) => {
    if (!route.permissions) {
      // public route
      return true;
    }
    return checkAccessRight(route.permissions);
  });
};

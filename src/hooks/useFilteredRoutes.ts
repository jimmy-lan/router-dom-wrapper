import { RouteEntry } from "../types";
import { usePermissionsContext } from "./usePermissionsContext";

export const useFilteredRoutes = (routes: RouteEntry[]) => {
  const { shouldRenderForbidden, checkAuthentication, checkAccessRight } =
    usePermissionsContext();

  if (shouldRenderForbidden) {
    return routes;
  }
  if (!checkAuthentication()) {
    // When the user is not authenticated, we don't know what permissions this
    // user possesses. When returning all the routes, individual route will
    // see that user is unauthorized and will redirect the user to unauthorized
    // route configured by the user of this library.
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

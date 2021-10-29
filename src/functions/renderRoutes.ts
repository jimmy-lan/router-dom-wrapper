import { RouteEntry } from "../types";
import { renderSingleRoute } from "./renderSingleRoute";
import { ReactNode } from "react";
import { getRouteKey } from "../utils";

/**
 * Return components corresponding to `routes` configuration.
 * @param routes Configuration to parse.
 * @param extraProps Extra props to pass into each route component.
 */
export const renderRoutes = (
  routes: RouteEntry[],
  extraProps?: Record<string, any>
): ReactNode[] => {
  return routes.map((route: RouteEntry) => {
    const key = getRouteKey(route);
    return renderSingleRoute(route, { key, ...extraProps });
  });
};

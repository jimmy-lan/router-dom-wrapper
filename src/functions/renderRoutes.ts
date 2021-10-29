import { RouteEntry } from "../types";
import { renderSingleRoute } from "./renderSingleRoute";
import { ReactNode } from "react";

export const renderRoutes = (
  routes: RouteEntry[],
  extraProps?: Record<string, any>
): ReactNode[] => {
  return routes.map((route: RouteEntry) =>
    renderSingleRoute(route, { key: route.path, ...extraProps })
  );
};

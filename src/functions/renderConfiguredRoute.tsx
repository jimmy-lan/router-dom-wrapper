import React, { ReactNode } from "react";
import { RouteEntry } from "../types";
import { ProtectedRoute, PublicRoute } from "../components";

export const renderConfiguredRoute = (
  route: RouteEntry,
  extraProps?: Record<string, any>
): ReactNode => {
  const { Component, permissions, handles, children, ...otherRouteProps } =
    route;

  const childrenToRender = children?.map((route) => {
    if (!route.permissions) {
      // Allow permission inheritance.
      route.permissions = permissions;
    }
    return route;
  });

  if (permissions) {
    return (
      <ProtectedRoute
        permissions={permissions}
        handles={handles}
        {...otherRouteProps}
        {...extraProps}
      >
        <Component routes={childrenToRender} />
      </ProtectedRoute>
    );
  } else {
    return (
      <PublicRoute {...otherRouteProps} {...extraProps}>
        <Component routes={childrenToRender} />
      </PublicRoute>
    );
  }
};

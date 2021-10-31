import React, { ReactNode } from "react";
import { RouteEntry } from "../types";
import { ProtectedRoute, PublicRoute } from "../components";
import { handleComponentField } from "../utils/handleComponentField";

/**
 * Render one route based on configuration `route`.
 * Return the component corresponding to the configuration parameter.
 * @param route Route to render.
 * @param extraProps Extra props to pass into route component.
 */
export const renderSingleRoute = (
  route: RouteEntry,
  extraProps?: Record<string, any>
): ReactNode => {
  const { component, permissions, handles, children, ...otherRouteProps } =
    route;

  if (permissions) {
    return (
      <ProtectedRoute
        permissions={permissions}
        handles={handles}
        {...otherRouteProps}
        {...extraProps}
      >
        {handleComponentField(component, { routes: children })}
      </ProtectedRoute>
    );
  } else {
    return (
      <PublicRoute {...otherRouteProps} {...extraProps}>
        {handleComponentField(component, { routes: children })}
      </PublicRoute>
    );
  }
};

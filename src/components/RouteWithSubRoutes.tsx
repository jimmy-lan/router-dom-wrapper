import React, { FunctionComponent } from "react";
import { RouteEntry } from "../types";
import { useRouteMatch } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";

interface Props {
  route: RouteEntry;
}

/**
 * A route factory to return `<PublicRoute />` or `<ProtectedRoute />` based
 * on a _single_ route configuration entry `props.route`. Configuration will be
 * processed and pass down to route components.
 *
 * This component will handle the feature of passing children routes and
 * permission inheritance.
 * @param props
 * @constructor
 */
const RouteWithSubRoutes: FunctionComponent<Props> = (props) => {
  const { route } = props;
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
      >
        <Component routes={childrenToRender} />
      </ProtectedRoute>
    );
  } else {
    return (
      <PublicRoute {...otherRouteProps}>
        <Component routes={childrenToRender} />
      </PublicRoute>
    );
  }
};

export { RouteWithSubRoutes };

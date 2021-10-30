import React, { FunctionComponent } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { joinPaths } from "../utils";
import { RouteWrapperProps } from "../types";
import { useRouteDefaultsContext } from "../hooks";

const RouteWrapper: FunctionComponent<RouteWrapperProps> = (props) => {
  const { path } = props;
  const routeDefaults = useRouteDefaultsContext({ disableProviderCheck: true });

  // This allows relative path syntax
  const { path: parentPath } = useRouteMatch();
  if (!props.path.startsWith(parentPath)) {
    props.path = joinPaths(parentPath, path);
  }

  return <Route {...routeDefaults} {...props} />;
};

export { RouteWrapper };

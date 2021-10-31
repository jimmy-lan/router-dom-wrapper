import React, { FunctionComponent } from "react";
import { Route } from "react-router-dom";
import { RouteWrapperProps } from "../types";
import { useRouteDefaultsContext } from "../hooks";

const RouteWrapper: FunctionComponent<RouteWrapperProps> = (props) => {
  const { children, ...otherProps } = props;
  const routeDefaults = useRouteDefaultsContext({ disableProviderCheck: true });

  return (
    <Route {...routeDefaults} {...otherProps}>
      {children}
    </Route>
  );
};

export { RouteWrapper };

import React, { FunctionComponent } from "react";
import { RouteWrapperProps } from "../types";
import { Route } from "react-router-dom";

const PublicRoute: FunctionComponent<RouteWrapperProps> = (props) => {
  return <Route {...props} />;
};

export { PublicRoute };

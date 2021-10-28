import { Route } from "react-router-dom";

import React, { FunctionComponent } from "react";
import { RouteWrapper } from "./RouteWrapper";
import { RouteWrapperProps } from "../types";

const PublicRoute: FunctionComponent<RouteWrapperProps> = (props) => {
  return <RouteWrapper {...props} />;
};

export { PublicRoute };

import { Route } from "react-router-dom";

import React, { FunctionComponent } from "react";
import { RouteWrapper } from "./RouteWrapper";
import { RouterWrapperProps } from "../types";

const PublicRoute: FunctionComponent<RouterWrapperProps> = (props) => {
  return <RouteWrapper {...props} />;
};

export { PublicRoute };

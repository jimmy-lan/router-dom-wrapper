import React, { FunctionComponent } from "react";
import {
  RouteDefaultsProvider,
  RouteDefaultsProviderProps,
} from "./RouteDefaultsProvider";

export const createRouteDefaultsProvider = (
  providerProps: RouteDefaultsProviderProps
): FunctionComponent => {
  return (props) => {
    const { children } = props;
    return (
      <RouteDefaultsProvider {...providerProps}>
        {children}
      </RouteDefaultsProvider>
    );
  };
};

import React, { Fragment, FunctionComponent } from "react";
import {
  createPermissionsProvider,
  PermissionsProviderProps,
} from "./permissions";
import {
  createRouteDefaultsProvider,
  RouteDefaultsProviderProps,
} from "./routeDefaults";

interface WrapperProviderProps {
  permissions?: PermissionsProviderProps;
  routeDefaults?: RouteDefaultsProviderProps;
}

export const createComposeProvider = (
  providerProps: WrapperProviderProps
): FunctionComponent => {
  const PermissionsProvider = providerProps.permissions
    ? createPermissionsProvider(providerProps.permissions)
    : Fragment;
  const RouteDefaultsProvider = providerProps.routeDefaults
    ? createRouteDefaultsProvider(providerProps.routeDefaults)
    : Fragment;
  return (props) => {
    const { children } = props;
    return (
      <PermissionsProvider>
        <RouteDefaultsProvider>{children}</RouteDefaultsProvider>
      </PermissionsProvider>
    );
  };
};

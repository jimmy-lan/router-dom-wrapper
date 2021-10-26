import React, { FunctionComponent } from "react";
import {
  PermissionsProvider,
  PermissionsProviderProps,
} from "./PermissionsProvider";

export const createPermissionsProvider = (
  providerProps: PermissionsProviderProps
): FunctionComponent => {
  return (props) => {
    const { children } = props;
    return (
      <PermissionsProvider {...providerProps}>{children}</PermissionsProvider>
    );
  };
};

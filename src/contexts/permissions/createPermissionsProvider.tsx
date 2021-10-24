import React, { PropsWithChildren } from "react";
import {
  PermissionsProvider,
  PermissionsProviderProps,
} from "./PermissionsProvider";

export const createPermissionsProvider = (
  props: PropsWithChildren<PermissionsProviderProps>
) => {
  const { children, ...providerProps } = props;
  return (
    <PermissionsProvider {...providerProps}>{children}</PermissionsProvider>
  );
};

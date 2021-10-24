import React, { createContext, PropsWithChildren } from "react";
import { RoutePermissionProviderProps } from "../../types";

interface PermissionContextValues extends RoutePermissionProviderProps {}

export const PermissionsContext = createContext<
  Partial<PermissionContextValues>
>({});

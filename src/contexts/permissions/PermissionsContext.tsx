import React, { createContext, PropsWithChildren } from "react";
import { PermissionsContextConfig } from "../../types";

export interface PermissionContextValues extends PermissionsContextConfig {}

export const PermissionsContext = createContext<
  Partial<PermissionContextValues>
>({});

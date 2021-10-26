import React, { createContext, PropsWithChildren } from "react";
import { PermissionsContextConfig } from "../../types";

export interface PermissionsContextValues extends PermissionsContextConfig {}

export const PermissionsContext = createContext<
  Partial<PermissionsContextValues>
>({});

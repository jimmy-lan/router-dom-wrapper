import React, { createContext } from "react";
import { PermissionsContextConfig } from "../../types";

export interface PermissionsContextValues extends PermissionsContextConfig {}

export const PermissionsContext = createContext<
  Partial<PermissionsContextValues>
>({});

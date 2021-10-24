import { createContext } from "react";
import { RoutePermissionProviderProps } from "../../types";

interface PermissionContextValues extends RoutePermissionProviderProps {}

export const PermissionContext = createContext<
  Partial<PermissionContextValues>
>({});

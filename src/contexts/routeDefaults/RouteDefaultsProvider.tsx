import { RouteEntry, RouteWrapperProps } from "../../types";

export interface RouteDefaultsProviderProps extends Partial<RouteWrapperProps> {
  permissions?: RouteEntry["permissions"];
}

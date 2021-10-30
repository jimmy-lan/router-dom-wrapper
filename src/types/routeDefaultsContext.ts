import { RouteWrapperProps } from "./RouteWrapperProps";
import { RouteEntry } from "./RouteEntry";

export interface RouteDefaultsContextConfig extends Partial<RouteWrapperProps> {
  permissions?: RouteEntry["permissions"];
}

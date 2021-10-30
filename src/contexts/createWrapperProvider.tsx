import { PermissionsProviderProps } from "./permissions";
import { RouteDefaultsProviderProps } from "./routeDefaults";

interface WrapperProviderProps {
  permissions?: PermissionsProviderProps;
  routeDefaults?: RouteDefaultsProviderProps;
}

export const createWrapperProvider = (
  providerProps: WrapperProviderProps
) => {};

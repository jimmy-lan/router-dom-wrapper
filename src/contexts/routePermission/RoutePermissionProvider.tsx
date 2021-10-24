import React, { FunctionComponent, PropsWithChildren } from "react";
import { PermissionContext } from "./PermissionContext";
import { IsAccessAllowedFunc, IsAuthenticatedFunc } from "../../types";

export interface RoutePermissionProviderProps<PermissionIndicator = unknown> {
  /**
   * A function to check whether the user is authenticated.
   * Return a boolean value indicating whether the user is authenticated.
   */
  isAuthenticated: IsAuthenticatedFunc;
  isAccessAllowed: IsAccessAllowedFunc<PermissionIndicator>;
}

type Props<PermissionIndicator = unknown> =
  RoutePermissionProviderProps<PermissionIndicator>;

function RoutePermissionProvider<PermissionIndicator = unknown>(
  props: PropsWithChildren<Props<PermissionIndicator>>
) {
  const { children } = props;
  return (
    <PermissionContext.Provider value={{}}>
      {children}
    </PermissionContext.Provider>
  );
}

export { RoutePermissionProvider };

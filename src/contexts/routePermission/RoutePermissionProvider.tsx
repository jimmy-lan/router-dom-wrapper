import React, { FunctionComponent } from "react";
import { PermissionContext } from "./PermissionContext";
import { IsAuthenticatedFunc } from "../../types";

export interface RoutePermissionProviderProps {
  /**
   * A function to check whether the user is authenticated.
   * Return a boolean value indicating whether the user is authenticated.
   */
  isAuthenticated: IsAuthenticatedFunc;
}

type Props = RoutePermissionProviderProps;

const RoutePermissionProvider: FunctionComponent<Props> = (props) => {
  const { children } = props;
  return (
    <PermissionContext.Provider value={{}}>
      {children}
    </PermissionContext.Provider>
  );
};

export { RoutePermissionProvider };

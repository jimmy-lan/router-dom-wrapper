import React, { FunctionComponent } from "react";
import { PermissionsContext } from "./PermissionsContext";
import { RoutePermissionProviderProps } from "../../types";

type Props = RoutePermissionProviderProps;

const PermissionsProvider: FunctionComponent<Props> = (props) => {
  const { children } = props;
  return (
    <PermissionsContext.Provider value={{}}>
      {children}
    </PermissionsContext.Provider>
  );
};

export { PermissionsProvider };

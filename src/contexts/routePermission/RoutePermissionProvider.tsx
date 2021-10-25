import React, { FunctionComponent } from "react";
import { PermissionContext } from "./PermissionContext";
import { RoutePermissionProviderProps } from "../../types";

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

import React, { FunctionComponent } from "react";
import { PermissionsContext } from "./PermissionsContext";
import { PermissionsContextConfig } from "../../types";

export interface PermissionsProviderProps extends PermissionsContextConfig {}

const PermissionsProvider: FunctionComponent<PermissionsProviderProps> = (
  props
) => {
  const { children, ...otherValues } = props;
  return (
    <PermissionsContext.Provider value={otherValues}>
      {children}
    </PermissionsContext.Provider>
  );
};

export { PermissionsProvider };

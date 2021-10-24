import React, { FunctionComponent } from "react";
import { PermissionsContext } from "./PermissionsContext";
import { PermissionsContextConfig } from "../../types";

interface Props extends PermissionsContextConfig {}

const PermissionsProvider: FunctionComponent<Props> = (props) => {
  const { children, ...otherValues } = props;
  return (
    <PermissionsContext.Provider value={otherValues}>
      {children}
    </PermissionsContext.Provider>
  );
};

export { PermissionsProvider };

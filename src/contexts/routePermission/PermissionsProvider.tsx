import React, { FunctionComponent } from "react";
import { PermissionsContext } from "./PermissionsContext";
import { PermissionsContextConfig } from "../../types";

type Props = PermissionsContextConfig;

const PermissionsProvider: FunctionComponent<Props> = (props) => {
  const { children } = props;
  return (
    <PermissionsContext.Provider value={{}}>
      {children}
    </PermissionsContext.Provider>
  );
};

export { PermissionsProvider };

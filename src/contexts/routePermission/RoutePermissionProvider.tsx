import React, { FunctionComponent, PropsWithChildren } from "react";
import { PermissionContext } from "./PermissionContext";
import { RoutePermissionProviderProps } from "../../types";

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

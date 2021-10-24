import { useContext } from "react";
import { PermissionsContextValues, PermissionsContext } from "../contexts";

export const usePermissionsContext = (): PermissionsContextValues => {
  const contextValues = useContext(PermissionsContext);
  if (!contextValues) {
    throw new Error();
  }
  // We enforce the validity of context values by using the
  // props in `PermissionsProvider`.
  return contextValues as PermissionsContextValues;
};

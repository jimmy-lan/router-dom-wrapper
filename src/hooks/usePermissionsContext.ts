import { useContext } from "react";
import { PermissionsContextValues, PermissionsContext } from "../contexts";
import { InvalidContextError } from "../errors/InvalidContextError";

export const usePermissionsContext = (): PermissionsContextValues => {
  const contextValues = useContext(PermissionsContext);
  if (!contextValues) {
    throw new InvalidContextError(
      "Could not use permissions context. " +
        "Did you forget to include a PermissionsProvider?"
    );
  }
  // We enforce the validity of context values by using the
  // props in `PermissionsProvider`.
  return contextValues as PermissionsContextValues;
};

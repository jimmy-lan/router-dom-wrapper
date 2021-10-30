import { useContext } from "react";
import { RouteDefaultsContext } from "../contexts";
import { InvalidContextError } from "../errors";

export const useRouteDefaultsContext = () => {
  const contextValues = useContext(RouteDefaultsContext);
  if (!contextValues || !contextValues.setRouteDefaults) {
    throw new InvalidContextError(
      "Could not use route defaults context. " +
        "Did you forget to include a RouteDefaultsProvider?"
    );
  }
  return contextValues;
};

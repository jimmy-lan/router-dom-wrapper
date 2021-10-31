import { useContext } from "react";
import { RouteDefaultsContext } from "../contexts";
import { InvalidContextError } from "../errors";

interface Options {
  /** When set to `true`, do not check for whether a valid provider is
   * included. Return `undefined` if no provider is present. Defaults
   * to `false`. You can set this value to `true` when you only want to
   * reference route default values, and can handle the case when the return
   * value from this call is `undefined`. */
  disableProviderCheck?: boolean;
}

export const useRouteDefaultsContext = (options?: Options) => {
  const contextValues = useContext(RouteDefaultsContext);
  if (
    !options?.disableProviderCheck &&
    (!contextValues || !contextValues.setRouteDefaults)
  ) {
    throw new InvalidContextError(
      "Could not use route defaults context. " +
        "Did you forget to include a RouteDefaultsProvider?"
    );
  }
  return contextValues;
};

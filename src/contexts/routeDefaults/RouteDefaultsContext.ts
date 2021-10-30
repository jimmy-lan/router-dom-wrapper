import { createContext } from "react";
import { RouteDefaultsProviderProps } from "./RouteDefaultsProvider";

export const RouteDefaultsContext = createContext<RouteDefaultsProviderProps>(
  {}
);

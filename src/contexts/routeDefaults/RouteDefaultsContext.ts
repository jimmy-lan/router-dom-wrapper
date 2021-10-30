import { createContext, Dispatch, SetStateAction } from "react";
import { RouteDefaultsContextConfig } from "../../types";

export interface RouteDefaultsContextValues extends RouteDefaultsContextConfig {
  setRouteDefaults: Dispatch<SetStateAction<RouteDefaultsContextConfig>>;
}

export const RouteDefaultsContext = createContext<RouteDefaultsContextValues>({
  setRouteDefaults: () => {},
});

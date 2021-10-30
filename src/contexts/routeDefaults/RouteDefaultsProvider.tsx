import { RouteDefaultsContextConfig } from "../../types";
import React, { FunctionComponent, useState } from "react";
import { RouteDefaultsContext } from "./RouteDefaultsContext";

export interface RouteDefaultsProviderProps
  extends RouteDefaultsContextConfig {}

export const RouteDefaultsProvider: FunctionComponent<RouteDefaultsProviderProps> =
  (props) => {
    const { children, ...otherValues } = props;
    const [routeDefaults, setRouteDefaults] = useState(otherValues);

    return (
      <RouteDefaultsContext.Provider
        value={{ setRouteDefaults, ...routeDefaults }}
      >
        {children}
      </RouteDefaultsContext.Provider>
    );
  };

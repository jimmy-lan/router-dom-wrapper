import React, { FunctionComponent, useMemo } from "react";
import { Switch } from "react-router";
import { RouteEntry } from "../types";
import { renderRoutes } from "../functions";
import { useRouteMatch } from "react-router-dom";
import { joinPaths } from "../utils";

interface Props {
  /** Configured route entries array to use. */
  routes: RouteEntry[];
  /**
   * When set to true, routes will be rendered _inclusively_.
   * That is, all routes configured in `props.entries` matching the current
   * URL will be rendered. If set to false, the first matching route in
   * `props.entries` array will be rendered _exclusively_.
   * Defaults to `false`.
   * @see https://reactrouter.com/web/api/Switch
   */
  disableSwitch?: boolean;
}

const SwitchWrapper: FunctionComponent<{ disableSwitch: boolean | undefined }> =
  ({ disableSwitch, children }) => {
    if (disableSwitch) {
      return <>{children}</>;
    }
    return <Switch>{children}</Switch>;
  };

const ConfiguredRoutes: FunctionComponent<Props> = (props) => {
  const { routes, disableSwitch } = props;
  const { path: parentPath } = useRouteMatch();

  const routesToRender = useMemo(
    () =>
      routes.map((route) => {
        if (!route.path.startsWith(parentPath)) {
          route.path = joinPaths(parentPath, route.path);
        }
        return route;
      }),
    [routes, parentPath]
  );

  return (
    <SwitchWrapper disableSwitch={disableSwitch}>
      {renderRoutes(routesToRender)}
    </SwitchWrapper>
  );
};

export { ConfiguredRoutes };

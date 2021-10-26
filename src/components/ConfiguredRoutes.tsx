import React, { FunctionComponent } from "react";
import { RouteEntry } from "../types";
import { Switch, useRouteMatch } from "react-router-dom";
import { useFilteredRoutes } from "../hooks";

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

const SwitchWrapper: FunctionComponent<{ disableSwitch?: boolean }> = ({
  disableSwitch,
  children,
}) => {
  if (disableSwitch) {
    return <>{children}</>;
  }
  return <Switch>{children}</Switch>;
};

const ConfiguredRoutes: FunctionComponent<Props> = (props) => {
  const { routes, disableSwitch } = props;
  const { path } = useRouteMatch();
  const filteredRoutes = useFilteredRoutes(routes);

  return <></>;
};

export { ConfiguredRoutes };

import React, { FunctionComponent } from "react";
import { RouteEntry } from "../types";

interface Props {
  /** Configured route entries array to use. */
  entries: RouteEntry[];
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

const ConfiguredRoutes: FunctionComponent<Props> = (props) => {
  return <></>;
};

export { ConfiguredRoutes };

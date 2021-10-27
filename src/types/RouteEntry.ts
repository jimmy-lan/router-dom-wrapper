import { ComponentClass, FunctionComponent } from "react";
import { PermissionsContextConfig } from "./permissionsContext";

/** An entry in the route configuration object. */
export interface RouteEntry {
  /** Path name to render the component. */
  path: string;
  /** Use exact route match. Defaults to false. */
  exact?: boolean;
  sensitive?: boolean;
  strict?: boolean;
  /**
   * A custom defined permissions indicator representing the access
   * control requirements for this route. This value will be passed into
   * `checkAccessRight` function that you specified in permissions context
   * to verify permissions.
   * If not present, this route can be accessed by any user
   */
  permissions?: unknown;
  /**
   * Specify how to handle permission-related situations. If not defined,
   * the `handles` in permission context will be used. Ignored if
   * `permissions` is a falsy value.
   */
  handles?: PermissionsContextConfig["handles"];
  /** The component to render in this route. */
  Component:
    | ComponentClass<{ routes?: RouteEntry[] }>
    | FunctionComponent<{ routes?: RouteEntry[] }>;
  /**
   * Children routes for this route. Children routes should
   * only be specified when the rendering of children depends
   * on the rendering of parent.
   */
  children?: RouteEntry[];
}

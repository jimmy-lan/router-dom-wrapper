import { ReactElement } from "react";
import { PermissionsContextConfig } from "./permissionsContext";

/** An entry in the route configuration object. */
export interface RouteEntry {
  /** Path name to render the component. */
  path: string;
  /** Use exact route match. Defaults to false. */
  exact?: boolean;
  /**
   * A custom defined permissions indicator representing the access
   * control requirements for this route. This value will be passed into
   * `checkAccessRight` function that you specified in permissions context
   * to verify permissions.
   * If not present, this route can be accessed by any user
   */
  permissions?: unknown;
  /**
   * Specify how to redirect user in case of need.
   * Defaults to undefined, where the redirect url in permissions context will
   * be used. Ignored if permissions is a falsy value.
   */
  redirect?: PermissionsContextConfig["redirect"];
  /** The component to render in this route. */
  Component: ReactElement;
  /**
   * Children routes for this route. Children routes should
   * only be specified when the rendering of children depends
   * on the rendering of parent.
   */
  children?: RouteEntry[];
}

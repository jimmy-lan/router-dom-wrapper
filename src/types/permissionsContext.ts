export type IsAuthenticatedFunc = () => boolean;

export type IsAccessAllowedFunc<Permission = unknown> = (
  permission: Permission
) => boolean;

export interface PermissionsContextConfig {
  redirect?: Partial<{
    /** Path to redirect the users when they attempt to access a protected
     * route without authenticating. */
    unauthorized: string;
    /** Path to redirect authenticated users when they attempt to access a
     * resource without proper permission.<br/> **NOTE**: This setting will
     * only be effective when `shouldRenderForbidden` is set to `true`. */
    forbidden: string;
  }>;
  /** A function to check whether the user is authenticated.
   * Return a boolean value indicating whether the user is authenticated. */
  isAuthenticated: IsAuthenticatedFunc;
  /** A function to check if the current logged in user has permission to
   * access a resource that requires `permission`. */
  isAccessAllowed: IsAccessAllowedFunc;
  /** When set to `true`, routes that the users do not have permission to
   * access will still be rendered on the DOM tree. Defaults to `false`. */
  shouldRenderForbidden: boolean;
}

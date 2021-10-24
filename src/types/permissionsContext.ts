export type IsAuthenticatedFunc = () => boolean;

export type IsAccessAllowedFunc<Permission = unknown> = (
  permission: Permission
) => boolean;

export interface PermissionsContextConfig {
  /** A function to check whether the user is authenticated.
   * Return a boolean value indicating whether the user is authenticated. */
  isAuthenticated: IsAuthenticatedFunc;
  /** A function to check if the current logged in user has permission to
   * access a resource that requires `permission`. */
  isAccessAllowed: IsAccessAllowedFunc;
}

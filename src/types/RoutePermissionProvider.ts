export type IsAuthenticatedFunc = () => boolean;

export type IsAccessAllowedFunc<PermissionIndicator = unknown> = (
  permissionIndicator: PermissionIndicator
) => boolean;

export interface RoutePermissionProviderProps<PermissionIndicator = unknown> {
  /** A function to check whether the user is authenticated.
   * Return a boolean value indicating whether the user is authenticated. */
  isAuthenticated: IsAuthenticatedFunc;
  /** A function to check if the current logged in user has permission to
   * access a resource with `permissionIndicator`. */
  isAccessAllowed: IsAccessAllowedFunc<PermissionIndicator>;
}

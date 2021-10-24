export type CheckAuthenticationFunc = () => boolean;

export type CheckAccessRightFunc<Permissions = unknown> = (
  permissions: Permissions
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
   * Return a boolean value to indicate whether the user is authenticated. */
  checkAuthentication: CheckAuthenticationFunc;
  /** A function to check if the current logged in user has permission to
   * access a resource that requires `permission. Return a boolean value to
   * indicate whether the user is allowed to access this resource.*/
  checkAccessRight: CheckAccessRightFunc;
  /** When set to `true`, routes that the users do not have permission to
   * access will still be rendered on the DOM tree. Defaults to `false`. */
  shouldRenderForbidden: boolean;
}

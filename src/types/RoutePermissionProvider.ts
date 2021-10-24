export type IsAuthenticatedFunc = () => boolean;

export type IsAccessAllowedFunc<PermissionIndicator = unknown> = (
  permissionIndicator: PermissionIndicator
) => boolean;

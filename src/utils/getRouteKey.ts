import { RouteEntry } from "../types";
import { InvalidValueError } from "../errors";

const getPermissionsString = (permissions: unknown) => {
  let result;
  try {
    result = JSON.stringify(permissions);
  } catch (_) {
    throw new InvalidValueError(
      `Cannot parse permissions ${permissions} to a usable key.` +
        "If you have unserializable route permissions, please define custom " +
        "keys for your routes."
    );
  }
  return result;
};

/**
 * Get the `key` required by React when rendering this route as a list.
 * @param route Route configuration object to get key.
 */
export const getRouteKey = (route: RouteEntry) => {
  const { key, path, permissions } = route;
  if (key) {
    return key;
  }
  if (!permissions) {
    return path;
  }
  const permissionsString = getPermissionsString(permissions);
  return path + permissionsString;
};

import { RouteEntry } from "./RouteEntry";

export type RouteDefaultsContextConfig = Pick<
  RouteEntry,
  "path" | "exact" | "permissions" | "strict"
>;

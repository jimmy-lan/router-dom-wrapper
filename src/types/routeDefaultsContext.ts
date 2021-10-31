import { RouteEntry } from "./RouteEntry";

export type RouteDefaultsContextConfig = Partial<
  Pick<RouteEntry, "path" | "exact" | "permissions" | "strict">
>;

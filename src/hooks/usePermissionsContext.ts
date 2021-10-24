import { useContext } from "react";
import { PermissionsContext } from "../contexts";

export const usePermissionsContext = () => {
  return useContext(PermissionsContext);
};

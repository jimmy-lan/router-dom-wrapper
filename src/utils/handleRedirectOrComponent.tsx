import React, { cloneElement, FunctionComponent } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { RedirectOrComponent } from "../types";

const RedirectWrapper: FunctionComponent<{ pathname: string }> = (props) => {
  const { pathname } = props;
  const location = useLocation();
  return <Redirect to={{ pathname, state: { from: location } }} />;
};

export const handleRedirectOrComponent = (
  field: RedirectOrComponent,
  additionalProps?: Record<string, any>
) => {
  if (typeof field === "string") {
    return <RedirectWrapper pathname={field} />;
  }
  if ("type" in field) {
    if (additionalProps) {
      return cloneElement(field, additionalProps);
    }
    return field;
  }
  const Component = field;
  return <Component {...additionalProps} />;
};

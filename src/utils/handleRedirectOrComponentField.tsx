import React, { cloneElement, FunctionComponent } from "react";
import { Redirect, useLocation, useRouteMatch } from "react-router-dom";
import { RedirectOrComponent } from "../types";
import { RedirectError } from "../errors";
import { handleComponentField } from "./handleComponentField";

const RedirectWrapper: FunctionComponent<{ pathname: string }> = (props) => {
  const { pathname } = props;
  const location = useLocation();
  const match = useRouteMatch(pathname);
  if (match && match.isExact) {
    throw new RedirectError(
      `Cannot redirect user to path "${pathname}" because the user does` +
        " not have sufficient permission. Please ensure that redirect paths are" +
        " accessible to all users."
    );
  }
  return <Redirect to={{ pathname, state: { from: location } }} />;
};

/**
 * Given a redirect-or-component handle, return the appropriate component
 * to render based on the input.
 * @param {RedirectOrComponent} field The redirect-or-component handle to parse.
 * @param {Record<string, any>} extraProps If `field` is a component, return
 * the constructed component with these additional props.
 * @see RedirectOrComponent
 */
export const handleRedirectOrComponentField = (
  field: RedirectOrComponent,
  extraProps?: Record<string, any>
) => {
  if (typeof field === "string") {
    return <RedirectWrapper pathname={field} />;
  }
  return handleComponentField(field, extraProps);
};

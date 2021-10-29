import { Component } from "../types";
import React, { cloneElement } from "react";

export const handleComponentField = (
  field: Component,
  extraProps?: Record<string, any>
) => {
  if ("type" in field) {
    if (extraProps) {
      return cloneElement(field, extraProps);
    }
    return field;
  }
  const Component = field;
  return <Component {...extraProps} />;
};

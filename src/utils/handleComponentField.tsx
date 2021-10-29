import { Component } from "../types";
import React, { cloneElement } from "react";

/**
 * Given a component field config, return an appropriate constructed component
 * to render. For more information on component fields, please see its
 * type definition.
 * @param {Component} field The component field to render.
 * @param {Record<string, any>} extraProps Return the constructed component
 *   with these props.
 * @see Component
 */
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

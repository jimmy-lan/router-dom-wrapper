import { ComponentClass, FunctionComponent, ReactElement } from "react";

/**
 * A type for fields that accept:
 * 1. A constructed React component; OR
 * 2. A reference to a React component.
 */
export type Component = ReactElement | ComponentClass | FunctionComponent;

/**
 * A type for fields that accept:
 * 1. A redirect pathname to redirect the user; OR
 * 2. A constructed React component; OR
 * 3. A reference to a React component.
 */
export type RedirectOrComponent = string | Component;

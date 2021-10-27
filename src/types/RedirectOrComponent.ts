import { ComponentClass, FunctionComponent, ReactElement } from "react";

/**
 * A type for fields that accept:
 * - (1) A redirect pathname to redirect the user; OR
 * - (2) A constructed React component to display; OR
 * - (3) A reference to a React component to display.
 */
export type RedirectOrComponent =
  | string
  | ReactElement
  | ComponentClass
  | FunctionComponent;

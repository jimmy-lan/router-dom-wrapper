import { RouterDomWrapperError } from "./RouterDomWrapperError";

export class InvalidContextError extends RouterDomWrapperError {
  type = "Invalid Context";
}

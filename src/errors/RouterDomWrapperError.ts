import { Serializable } from "../types";

export class RouterDomWrapperError extends Error implements Serializable {
  constructor(message?: string, public cause?: string) {
    super(message);
    Object.setPrototypeOf(this, RouterDomWrapperError.prototype);
  }

  serialize(): string {
    const reprTokens = [`[Router DOM Wrapper] ${this.message}`];
    if (this.cause) {
      reprTokens.push(`Caused by: ${this.cause}.`);
    }
    return reprTokens.join("\n");
  }
}

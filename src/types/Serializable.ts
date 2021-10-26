export interface Serializable {
  serialize: () => string;
  deserialize?: (...args: any) => void;
}

export * from "./Component";
export * from "./Container";
export * from "./Page";
export * from "./Template";

export function Core(Wrapped) {
  return props => {
    return Wrapped(props);
  };
}

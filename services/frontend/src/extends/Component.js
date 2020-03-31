import { Core } from "./index";

export function Component(WrappedComponent) {
  return Core(props => {
    return <WrappedComponent {...props} />;
  });
}

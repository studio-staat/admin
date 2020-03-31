import { Core } from "./index";

export function Container(WrappedContainer) {
  return Core(props => {
    return <WrappedContainer {...props} />;
  });
}

import { Core } from "./index";

export function Container(WrappedContainer: any) {
  return Core((props?: object) => {
    return <WrappedContainer {...props} />;
  });
}

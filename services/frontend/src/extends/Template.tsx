import { Core } from "./index";
import { useWindowSize } from "../hooks";

export function Template(WrappedTemplate: any) {
  return Core((props?: object) => {
    const { winWidth, winHeight } = useWindowSize();
    return (
      <WrappedTemplate winWidth={winWidth} winHeight={winHeight} {...props} />
    );
  });
}

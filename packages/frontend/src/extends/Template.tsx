import { Core } from "./index";
import { useWindowSize } from "../hooks";

export function Template(WrappedTemplate) {
  return Core(props => {
    const { winWidth, winHeight } = useWindowSize();
    return (
      <WrappedTemplate winWidth={winWidth} winHeight={winHeight} {...props} />
    );
  });
}

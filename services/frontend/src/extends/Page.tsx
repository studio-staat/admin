import { Core } from "./index";

export function Page(WrappedPage) {
  return Core(props => {
    return <WrappedPage {...props} />;
  });
}

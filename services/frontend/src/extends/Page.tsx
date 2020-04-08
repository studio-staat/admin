import { Core } from "./index";

export function Page(WrappedPage: any) {
  return Core((props?: object) => {
    return <WrappedPage {...props} />;
  });
}

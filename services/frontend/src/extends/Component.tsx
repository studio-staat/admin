import React from "react";
import { Core } from "./index";

export function Component(WrappedComponent: any) {
  return Core((props?: object) => {
    return <WrappedComponent {...props} />;
  });
}

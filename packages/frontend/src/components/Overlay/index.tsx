import classNames from "classnames";
import { Component } from "../../extends";
import style from "./index.module.css";

interface OverlayPropTypes {
  className?: string;
  full?: boolean;
  children?: any;
}

export const Overlay = Component(
  ({ className = "", full = false, ...props }: OverlayPropTypes) => {
    return (
      <>
        <div
          {...props}
          className={classNames(
            full ? style["overlay-full"] : style.overlay,
            className
          )}
        />
      </>
    );
  }
);

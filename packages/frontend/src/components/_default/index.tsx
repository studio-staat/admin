import classNames from "classnames";
import { Component } from "../../extends";
import style from "./index.module.css";

interface DefaultComponentPropTypes {
  className?: string;
}

export const DefaultComponent = Component(
  ({ className = "", ...props }: DefaultComponentPropTypes) => {
    return (
      <>
        <span {...props} className={classNames(style.default, className)} />
      </>
    );
  }
);

import classNames from "classnames";
import { Component } from "../../../extends";
import style from "./index.module.css";

interface ButtonGroupPropTypes {
  className?: string;
}

export const ButtonGroup = Component(
  ({ className = "", ...props }: ButtonGroupPropTypes) => {
    return (
      <div
        {...props}
        className={classNames(className, style["button-group"])}
      />
    );
  }
);

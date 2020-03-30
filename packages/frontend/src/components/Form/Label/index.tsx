import classNames from "classnames";
import { Component } from "../../../extends";
import style from "./index.module.css";

interface LabelPropTypes {
  className?: string;
}

export const Label = Component(
  ({ className = "", ...props }: LabelPropTypes) => {
    return <label {...props} className={classNames(className, style.label)} />;
  }
);

import classNames from "classnames";
import { Component } from "../../../extends";
import { Label } from "../Label";
import style from "./index.module.css";

interface FormElementPropTypes {
  className?: string;
  label?: string;
}

export const FormElement = Component(
  ({ className = "", label = "", ...props }: FormElementPropTypes) => {
    return (
      <>
        {label ? <Label>{label}</Label> : false}
        <div
          {...props}
          className={classNames(className, style["form-element"])}
        />
      </>
    );
  }
);

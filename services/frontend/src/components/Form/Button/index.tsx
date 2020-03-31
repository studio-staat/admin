import classNames from "classnames";
import { Component } from "../../../extends";
import style from "./index.module.css";

interface ButtonPropTypes {
  className?: string;
}

export const Button = Component(
  ({ className = "", ...props }: ButtonPropTypes) => {
    return (
      <button
        type="button"
        {...props}
        className={classNames(className, style.button)}
      />
    );
  }
);

export const SecondaryButton = Component(
  ({ className = "", ...props }: any) => {
    return (
      <Button
        {...props}
        className={classNames(className, style["button-secondary"])}
      />
    );
  }
);

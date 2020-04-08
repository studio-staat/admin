import classNames from "classnames";
import { Component } from "../../../extends";
import style from "./index.module.css";

interface ButtonPropTypes {
  children: any;
  className?: string;
  icon?: string;
}

export const Button = Component(
  ({
    className = "",
    icon = null,
    children = null,
    ...props
  }: ButtonPropTypes) => {
    return (
      <button
        type="button"
        {...props}
        className={classNames(className, style.button)}
      >
        {icon ? (
          <>
            <i className={`fas fa-${icon}`}></i>&nbsp;&nbsp;
          </>
        ) : (
          false
        )}
        {children}
      </button>
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

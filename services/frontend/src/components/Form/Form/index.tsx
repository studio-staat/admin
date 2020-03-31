import { useEffect, useRef } from "react";
import classNames from "classnames";
import { Component } from "../../../extends";
import style from "./index.module.css";

interface FormPropTypes {
  className?: string;
  onEnter?: any;
}

export const Form = Component(
  ({ className = "", onEnter = null, ...props }: FormPropTypes) => {
    const ref = useRef(null);
    const _keyUpHandler = ({ keyCode }: any) => {
      if (keyCode === 13) {
        onEnter && onEnter();
      }
      return false;
    };
    useEffect(() => {
      ref.current.addEventListener("keyup", _keyUpHandler, false);
      return () => {
        ref.current.removeEventListener("keyup", _keyUpHandler);
      };
    }, []);
    return (
      <form
        ref={ref}
        {...props}
        className={classNames(className, style.form)}
      />
    );
  }
);

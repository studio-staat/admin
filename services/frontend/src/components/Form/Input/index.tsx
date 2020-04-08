import { useRef, useEffect } from "react";
import classNames from "classnames";
import { Component } from "../../../extends";
import styles from "./index.module.css";

interface InputPropTypes {
  className?: string;
  type?: string;
  focus?: boolean;
  select?: boolean;
}

export const Input = Component(
  ({
    className = "",
    type = "text",
    focus = false,
    select = false,
    ...props
  }: InputPropTypes) => {
    const ref = useRef(null);
    const inputTypes = ["text", "password"];
    type = inputTypes.indexOf(type) > -1 ? type : "text";
    useEffect(() => {
      const input = ref.current;
      focus && input.focus();
      select && input.select();
    }, [focus, select]);
    return (
      <>
        <input
          ref={ref}
          type={type}
          {...props}
          className={classNames(className, styles.input)}
        />
      </>
    );
  }
);

export const InputText = Component(({ ...props }: any) => {
  return <Input {...props} type="text" />;
});

export const InputPassword = Component(({ ...props }: any) => {
  return <Input {...props} type="password" />;
});

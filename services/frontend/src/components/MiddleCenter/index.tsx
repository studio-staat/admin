import React from "react";
import styles from "./index.module.css";

interface MiddleCenterTypes {
  children: any;
  width: number;
  height: number;
}

export function MiddleCenter({
  children,
  width = 400,
  height = 300,
}: MiddleCenterTypes) {
  const style = {
    width: `${width}px`,
    height: `${height}px`,
    marginTop: `-${height / 2}px`,
    marginLeft: `-${width / 2}px`,
    maxWidth: "80%",
  };
  return (
    <div className={styles.MiddleCenter} style={style}>
      {children}
    </div>
  );
}

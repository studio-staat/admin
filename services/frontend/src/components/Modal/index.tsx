import React from "react";
import { MiddleCenter } from "../MiddleCenter";
import styles from "./index.module.css";

export function Modal({
  children,
  width = 600,
  open = true,
  onOverlayClick = null,
  ...props
}: any) {
  const style = { width: `${width}px` };
  if (!open) return null;
  return (
    <>
      <MiddleCenter width={width} height={400}>
        <div className={styles.modal} style={style}>
          <div className={styles.child}>{children}</div>
        </div>
      </MiddleCenter>
      <div className={styles.overlay} onClick={onOverlayClick} />
    </>
  );
}

import React from "react";
import styles from "./index.module.css";

export function Modal({ children, actions, ...props }: any) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalChild}>{children}</div>
      {actions ? <div className={styles.modalChild}>{actions}</div> : null}
    </div>
  );
}

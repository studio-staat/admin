import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./index.module.css";

function OverlayPortal({
  children,
  Component,
  color,
  backgroundColor,
  ...props
}) {
  const [protalEl, setPortalEl] = useState(null);
  useEffect(() => {
    let el;
    if (!document.querySelector(".admin--overlay")) {
      el = document.createElement("div");
      el.setAttribute("className", "admin--overlay");
      document.body.appendChild(el);
    }
    setPortalEl(el);
    return () => {
      document.body.removeChild(el);
      el = null;
    };
  }, []);
  return protalEl
    ? ReactDOM.createPortal(
        <Component
          children={children}
          color={color}
          backgroundColor={backgroundColor}
          {...props}
        />,
        protalEl
      )
    : null;
}

const OverlayComponent = ({ children, color, backgroundColor, ...props }) => {
  const styleOverlay = {
    backgroundColor,
  };
  const styleChilds = {
    color,
  };

  return (
    <>
      <div className={styles.overlay} style={styleOverlay} />
      <div className={styles.childs} style={styleChilds}>
        {children}
      </div>
    </>
  );
};

export function Overlay({
  children = null,
  color = "white",
  backgroundColor = "blue",
  ...props
}: any) {
  return OverlayPortal({
    Component: OverlayComponent,
    children,
    color,
    backgroundColor,
    ...props,
  });
}

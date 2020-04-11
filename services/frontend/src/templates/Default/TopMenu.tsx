import React, { useState } from "react";
import Popover from "react-tiny-popover";
import styles from "./TopMenu.module.css";
import { Icon } from "../../components";

function TopMenuItem({
  label = "",
  children = null,
  subMenu = null,
}: any = {}) {
  const [open, setOpen] = useState(false);
  const content =
    subMenu && subMenu.length ? (
      <div className={styles.topmenuSubmenu}>
        {subMenu.map(({ label, payload, icon = null }, i) => {
          return (
            <div
              key={`MenuSubKeyItem${i}`}
              onClick={payload}
              className={styles.topmenuSubmenuItem}
            >
              {label}
              {icon ? <Icon type={icon} /> : false}
            </div>
          );
        })}
      </div>
    ) : null;
  const _onClickOutsideHandler = () => {
    setOpen(false);
  };
  return (
    <Popover
      isOpen={open}
      position={"bottom"}
      content={content}
      align="start"
      onClickOutside={_onClickOutsideHandler}
    >
      <div className={styles.topmenuItem} onClick={() => setOpen(!open)}>
        {label}
      </div>
    </Popover>
  );
}

export function TopMenu() {
  return (
    <div className={styles.topmenu}>
      <TopMenuItem
        label="File"
        subMenu={[
          {
            label: "New file",
            payload: () => {
              console.log("new file");
            },
            icon: "file",
          },
          {
            label: "Edit file",
            payload: () => {
              console.log("new file");
            },
          },
        ]}
      ></TopMenuItem>
      <TopMenuItem
        label="Edit"
        subMenu={[
          {
            label: "New file",
            payload: () => {
              console.log("new file");
            },
          },
          {
            label: "Edit file",
            payload: () => {
              console.log("new file");
            },
          },
        ]}
      ></TopMenuItem>
    </div>
  );
}

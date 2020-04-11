import { useState, useEffect } from "react";
import Popover from "react-tiny-popover";
import Link from "next/link";
import { useLoginForm } from "../hooks";
import { Container } from "../extends";
import {
  Form,
  FormElement,
  Button,
  SecondaryButton,
  ButtonGroup,
  InputText,
  InputPassword,
  Modal,
  LogoutIcon,
  SettingsIcon,
  UserSettingsIcon,
} from "../components";
import styles from "./Login.module.css";

interface useLoginFormTypes {
  userName: string;
  setUserName: any;
  userPass: string;
  setUserPass: any;
  submitForm: any;
}

export const LoginForm = Container(
  ({ onSuccess = null, onFail = null, onCancel = null }: any) => {
    const {
      userName,
      setUserName,
      userPass,
      setUserPass,
      submitForm,
    }: useLoginFormTypes = useLoginForm({ onSuccess, onFail });

    const _changeUserNameHandler = ({ target }: any) =>
      setUserName(target.value);
    const _changeUserPassHandler = ({ target }: any) =>
      setUserPass(target.value);
    const _submitFormHandler = () => submitForm({ userName, userPass });

    return (
      <div className={styles.loginform}>
        <Form className={styles.form}>
          <FormElement label="Username">
            <InputText
              focus
              value={userName}
              onChange={_changeUserNameHandler}
            />
          </FormElement>
          <FormElement label="Password">
            <InputPassword value={userPass} onChange={_changeUserPassHandler} />
          </FormElement>
          <ButtonGroup>
            <Button onClick={_submitFormHandler} icon="user">
              Login
            </Button>
            {onCancel ? (
              <SecondaryButton icon="eject" onClick={onCancel}>
                Cancel
              </SecondaryButton>
            ) : null}
          </ButtonGroup>
        </Form>
      </div>
    );
  }
);

export const LoginLink = Container(({ children }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <span
        className={styles.link}
        onClick={() => {
          if (!open) {
            setOpen(true);
          }
        }}
      >
        {children}
      </span>
      <Modal open={open} onOverlayClick={() => setOpen(false)}>
        <LoginForm />
      </Modal>
    </>
  );
});

function AuthBoxPopover() {
  return (
    <div className={styles.popover}>
      <div className={styles.popoverChild}>
        <LogoutIcon /> logout
      </div>
      <div className={styles.popoverChild}>
        <Link href="/settings">
          <a>
            <SettingsIcon /> settings
          </a>
        </Link>
      </div>
      <div className={styles.popoverChild}>
        <Link href="/me">
          <a>
            <UserSettingsIcon /> profile
          </a>
        </Link>
      </div>
    </div>
  );
}

export const AuthBox = Container(() => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  return (
    <Popover
      isOpen={popoverOpen}
      position={"bottom"} // preferred position
      content={<AuthBoxPopover />}
      onClickOutside={() => setPopoverOpen(false)}
    >
      <div
        className={styles.authbox}
        onClick={() => setPopoverOpen(!popoverOpen)}
      >
        <div className={styles.avatar}>
          <img src="https://picsum.photos/id/1027/50/50" />
        </div>
        <div className={styles.name}>Pieter Bergwerff</div>
      </div>
    </Popover>
  );
});

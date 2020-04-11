import { useState } from "react";
import { NextPage } from "next";
import { DefaultTemplate } from "../templates";
import { UsersList, LoginForm, LoginLink } from "../containers";
import { Modal, Button, SecondaryButton, ButtonGroup } from "../components";
import { Page } from "../extends";

const IndexPage: NextPage = Page(() => {
  return (
    <DefaultTemplate>
      <h1>Welcome to admin!</h1>
      <UsersList />
      <LoginLink>
        <Button icon="user">login</Button>
      </LoginLink>
      <TmpContent />
    </DefaultTemplate>
  );
});

export default IndexPage;

let tmps: any = [];
for (let i = 0; i < 500; i++) {
  tmps.push(<p key={`Example${i}`}>A lot of text</p>);
}
function TmpContent() {
  return tmps;
}

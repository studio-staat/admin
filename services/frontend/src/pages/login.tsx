import { NextPage } from "next";
import Router from "next/router";
import { Page } from "../extends";
import { DefaultTemplate } from "../templates";
import { LoginForm } from "../containers";
import { Modal } from "../components";

const IndexPage: NextPage = Page(() => {
  return (
    <DefaultTemplate>
      <Modal open={true}>
        <LoginForm
          onSuccess={() => Router.push("/")}
          onFail={() => {
            console.log("NOPE");
          }}
          onCancel={() => {
            Router.push("/");
          }}
        />
      </Modal>
    </DefaultTemplate>
  );
});

export default IndexPage;

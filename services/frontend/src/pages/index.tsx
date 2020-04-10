import { NextPage } from "next";
import { DefaultTemplate } from "../templates";
import { UsersList } from "../containers";
import { Modal, Button, SecondaryButton, ButtonGroup } from "../components";
import { Page } from "../extends";

const IndexPage: NextPage = Page(() => {
  return (
    <DefaultTemplate>
      <Modal
        actions={
          <ButtonGroup>
            <Button>submit</Button>
            <SecondaryButton>cancel</SecondaryButton>
          </ButtonGroup>
        }
      >
        yoyoyoyoy
      </Modal>
      <h1>Welcome to admin!</h1>
      <UsersList />
    </DefaultTemplate>
  );
});

export default IndexPage;

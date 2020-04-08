import { NextPage } from "next";
import { DefaultTemplate } from "../templates";
import { UsersList } from "../containers";
import { Page } from "../extends";

const IndexPage: NextPage = Page(() => {
  return (
    <DefaultTemplate>
      <h1>Welcome to admin!</h1>
      <UsersList />
    </DefaultTemplate>
  );
});

export default IndexPage;

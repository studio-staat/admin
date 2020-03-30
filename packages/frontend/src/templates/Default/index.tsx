import { Template } from "../../extends";
import { LoginForm } from "../../containers";

export const DefaultTemplate = Template(
  ({ children, winWidth, winHeight }: any) => {
    return (
      <>
        TPL
        {children}
        winWidth: {winWidth} winHeight: {winHeight}
        <LoginForm />
      </>
    );
  }
);

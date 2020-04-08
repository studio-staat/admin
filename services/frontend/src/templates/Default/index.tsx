import { Template } from "../../extends";
import { LoginForm } from "../../containers";
import { MiddleCenter } from "../../components";

export const DefaultTemplate = Template(
  ({ children, winWidth, winHeight }: any) => {
    return (
      <>
        TPL
        {children}
        winWidth: {winWidth} winHeight: {winHeight}
        <MiddleCenter width={800} height={600}>
          <LoginForm />
        </MiddleCenter>
      </>
    );
  }
);

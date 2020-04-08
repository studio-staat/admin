import { Template } from "../../extends";
import { LoginForm } from "../../containers";
import { MiddleCenter } from "../../components";

interface DefaultTemplateTypes {
  children: any;
  winWidth?: number;
  winHeight?: number;
}

export const DefaultTemplate = Template(
  ({ children, winWidth, winHeight }: DefaultTemplateTypes) => {
    return (
      <>
        TPL
        {children}
        {/* 
        winWidth: {winWidth} winHeight: {winHeight}
        <MiddleCenter width={800} height={600}>
          <LoginForm />
        </MiddleCenter>
        */}
      </>
    );
  }
);

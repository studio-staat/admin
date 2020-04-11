import { Template } from "../../extends";
import { AuthBox } from "../../containers";
import { TopMenu } from "./TopMenu";
import styles from "./index.module.css";

interface DefaultTemplateTypes {
  children: any;
  winWidth?: number;
  winHeight?: number;
}

export const DefaultTemplate = Template(
  ({ children }: DefaultTemplateTypes) => {
    return (
      <div className={styles.DefaultTemplate}>
        <div className={styles.leftColumn}>Content that cannot flex</div>
        <div className={styles.middleColumn}>
          <TopMenu />
          {children}
        </div>
        <div className={styles.rightColumn}>
          <AuthBox />
        </div>
      </div>
    );
  }
);

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
} from "../components";

interface useLoginFormTypes {
  userName: string;
  setUserName: any;
  userPass: string;
  setUserPass: any;
  submitForm: any;
  loggedUser: object;
}

export const LoginForm = Container(() => {
  const {
    userName,
    setUserName,
    userPass,
    setUserPass,
    submitForm,
    loggedUser,
  }: useLoginFormTypes = useLoginForm();

  if (loggedUser) {
    console.log(loggedUser);
    return null;
  }

  return (
    <>
      <Form
        className="z-40"
        onEnter={() => {
          console.log("fix: SUBMIT NOT WORKING!!");
          submitForm();
        }}
        style={{ backgroundColor: "white" }}
      >
        <FormElement label="Username">
          <InputText
            focus
            value={userName}
            onChange={({ target }) => setUserName(target.value)}
          />
        </FormElement>
        <FormElement label="Password">
          <InputPassword
            value={userPass}
            onChange={({ target }) => setUserPass(target.value)}
          />
        </FormElement>
        <ButtonGroup>
          <Button
            onClick={() => submitForm({ userName, userPass })}
            icon="user"
          >
            Login
          </Button>
          <SecondaryButton icon="eject">Cancel</SecondaryButton>
        </ButtonGroup>
      </Form>
    </>
  );
});

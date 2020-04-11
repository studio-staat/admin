import { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const DO_LOGIN = gql`
  mutation DoLogin($userName: String!, $userPass: String!) {
    doLogin(userName: $userName, userPass: $userPass) {
      loggedUser {
        userId
        userName
        userStatus
      }
    }
  }
`;

const GET_LOGGEED_USER = gql`
  query {
    loggedUser {
      userId
      userName
      userStatus
    }
  }
`;

export function useLoginForm({ onSuccess = null, onFail = null }: any) {
  const [doLogin, { data }] = useMutation(DO_LOGIN, {
    update(cache, { data: { doLogin } }) {
      //const { loggedUser } = cache.readQuery({ query: GET_LOGGEED_USER });
      //console.log({ loggedUser });
    },
  });
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const [loggedUser, setLoggedUser] = useState(null);
  const submitForm = async () => {
    const login = await doLogin({ variables: { userName, userPass } });
    const loggedUser =
      login && login.data && login.data.doLogin && login.data.doLogin.loggedUser
        ? login.data.doLogin.loggedUser
        : null;
    if (loggedUser) {
      if (typeof onSuccess === "function") {
        await onSuccess(loggedUser);
      }
    } else {
      if (typeof onFail === "function") {
        await onFail(loggedUser);
      }
    }
    setLoggedUser(loggedUser);
  };
  return {
    userName,
    setUserName,
    userPass,
    setUserPass,
    submitForm,
    loggedUser,
  };
}

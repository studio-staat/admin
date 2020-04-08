import { useState } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const ALL_USERS = gql`
  query {
    getUsers {
      userId
      userName
    }
  }
`;

export function useUsers() {
  const { loading, error, data } = useQuery(ALL_USERS);
  return { loading, error, users: data ? data.getUsers : null };
}

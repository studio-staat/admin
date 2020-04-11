import "isomorphic-fetch";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";

import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";

const port = process.env.API_PORT || 8000;

const link = createHttpLink({
  uri: `http://localhost:${port}`,
  credentials: "include",
});

export const client = new ApolloClient({
  //uri: `http://localhost:${port}`,
  cache: new InMemoryCache(),
  link,
});

export default ApolloProvider;

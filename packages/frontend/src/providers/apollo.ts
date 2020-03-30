import "isomorphic-fetch";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";

const port = process.env.API_PORT || 8000;

export const client = new ApolloClient({
  uri: `http://localhost:${port}`,
  cache: new InMemoryCache()
});

export default ApolloProvider;

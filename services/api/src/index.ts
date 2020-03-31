import { ApolloServer, gql } from "apollo-server";
import { Authentication } from "./models";

const typeDefs = gql`
  type User {
    userId: Int
    userName: String
    userStatus: String
  }

  type Logged {
    loggedUser: User
  }

  type Query {
    getUsers: [User]
  }

  type Mutation {
    doLogin(userName: String, userPass: String): Logged
  }
`;

const resolvers = {
  Query: {
    getUsers: async () => {
      return [
        {
          userId: 1,
          userName: "pierro"
        },
        {
          userId: 2,
          userName: "nanda"
        }
      ];
    }
  },
  Mutation: {
    doLogin: async (_, { userName, userPass }: any) => {
      const auth = new Authentication();
      let loggedUser;
      try {
        loggedUser = await auth.login({ userName, userPass });
      } catch (err) {}
      return { loggedUser };
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

(async () => {
  const { url } = await server.listen({ port: process.env.API_PORT || 4000 });
  console.log(`🚀  API server ready at ${url}`);
})();

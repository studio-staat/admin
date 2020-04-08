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
          userName: "pierro",
        },
        {
          userId: 2,
          userName: "nanda",
        },
        {
          userId: 3,
          userName: "joop",
        },
        {
          userId: 4,
          userName: "hans",
        },
      ];
    },
  },
  Mutation: {
    doLogin: async (parent: any, { userName, userPass }: any, context: any) => {
      const auth = new Authentication();
      let loggedUser;
      try {
        loggedUser = await auth.login({ userName, userPass });
      } catch (err) {}
      context.res.cookie("myLoggedUserCookieTest", 12345, {
        maxAge: 900000,
        httpOnly: true,
      });
      return { loggedUser };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req, res }) => {
    return { req, res };
  },
});

(async () => {
  const { url } = await server.listen({ port: process.env.API_PORT || 4000 });
  console.log(`🚀  API server ready at ${url}`);
})();

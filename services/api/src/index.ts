import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { UsersLibrary } from "./libs";
import { Authentication, UserModel } from "./models";

const typeDefs = gql`
  type User {
    userId: Int
    userName: String
    userPass: String
    userFullName: String
    userStatus: String
    userCreatedOn: String
    userEditedOn: String
  }

  type Logged {
    loggedUser: User
  }

  type Query {
    getUser(userId: Int): User
    getUsers: [User]
  }

  type Mutation {
    doLogin(userName: String, userPass: String): Logged
    createUser(
      userName: String
      userPass: String
      userFullName: String
      userStatus: String
    ): User
  }
`;

const resolvers = {
  Query: {
    getUser: async (parent: any, { userId }: any, context: any) => {
      const user = new UserModel({ userId });
      return await user.get();
    },
    getUsers: async () => {
      const users = new UsersLibrary();
      return await users.all();
    },
  },
  Mutation: {
    doLogin: async (parent: any, { userName, userPass }: any, context: any) => {
      const auth = new Authentication();
      let loggedUser;
      try {
        loggedUser = await auth.login({ userName, userPass });
      } catch (err) {}
      //console.log(context.res.cookie);
      //context.res.cookie("loggedHash", "12345");
      return { loggedUser };
    },
    createUser: async (
      parent: any,
      { userName, userPass, userFullName, userStatus }: any,
      context: any
    ) => {
      const user = new UserModel({
        userName,
        userPass,
        userFullName,
        userStatus,
      });
      await user.create();
      return {};
    },
  },
};

const server = express();
server.use(cookieParser());
server.use(cors());

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res }),
});

apollo.applyMiddleware({
  app: server,
  path: "/",
});

server.listen({ port: process.env.API_PORT || 4000 }, () => {
  console.log("🚀 - Server ready");
  console.log("Try your health check at: .well-known/apollo/app-health");
});

/*
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
*/

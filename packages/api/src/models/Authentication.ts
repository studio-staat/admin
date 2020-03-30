interface LoginType {
  userName: string;
  userPass: string;
}

export class Authentication {
  async login({ userName, userPass }: LoginType) {
    const check =
      userName === "pierro" && userPass === "esveld"
        ? {
            userId: 1,
            userName: "pierro",
            userStatus: "enabled"
          }
        : null;
    return check;
  }
}

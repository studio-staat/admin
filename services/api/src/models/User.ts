import { Model } from "../extends";

interface UserTypes {
  userId?: number;
  userName?: string;
  userPass?: string;
  userFullName?: string;
  userStatus?: string;
  userCreatedOn?: object;
  userEditedOn?: object;
}

export class UserModel extends Model {
  userId: number;
  userName: string;
  userPass: string;
  userFullName: string;
  userStatus: string;
  userCreatedOn: object;
  userEditedOn: object;

  constructor({
    userId = -1,
    userName = "",
    userPass = "",
    userFullName = "",
    userStatus = "candidate",
    userCreatedOn = new Date(),
    userEditedOn = new Date(),
  }: UserTypes) {
    super();
    this.userId = userId;
    this.userName = userName;
    this.userPass = userPass;
    this.userFullName = userFullName;
    this.userStatus = userStatus;
    this.userCreatedOn = userCreatedOn;
    this.userEditedOn = userEditedOn;
  }

  async get() {
    const user = await this.db("adminUsers").where("userId", this.userId);
    return user && user.length ? { ...user[0] } : false;
  }

  async create() {
    const insertUser = {
      ...this.defaults(),
      userName: this.userName,
      userPass: this.userPass,
      userFullName: this.userFullName,
      userStatus: this.userStatus,
      userCreatedOn: this.userCreatedOn,
      userEditedOn: this.userEditedOn,
    };

    console.log({ insertUser });
  }

  defaults() {
    return {
      userId: -1,
      userName: "",
      userPass: "",
      userFullName: "",
      userStatus: "candidate",
      userCreatedOn: new Date(),
      userEditedOn: new Date(),
    };
  }
}

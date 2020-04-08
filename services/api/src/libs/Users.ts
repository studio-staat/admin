import { Library } from "../extends";

export class UsersLibrary extends Library {
  constructor() {
    super();
  }
  async all() {
    const users = await this.db("adminUsers");
    return [...users];
  }
}

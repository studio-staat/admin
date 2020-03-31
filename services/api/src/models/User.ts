interface getByIdTypes {
  userId: boolean;
}

export class User {
  async getById({ userId }: getByIdTypes) {
    return {};
  }
}

import knex from "knex";

export class Core {
  db: any;
  constructor() {
    this.db = knex({
      client: "mysql",
      connection: {
        host: "127.0.0.1",
        user: "admin",
        password: "admin",
        database: "admin",
      },
    });
  }
}

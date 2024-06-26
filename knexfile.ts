import type { Knex } from "knex";
import dotenv from "dotenv";

// call function dotenv;
dotenv.config();

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      // filename: "./dev.sqlite3"
      host: process.env.HOSTDB,
      database: process.env.DATABASE,
      user: process.env.USER,
      password: process.env.PASSWORD,
      port: 42677
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      // filename: "./dev.sqlite3"
      host: process.env.HOSTDB,
      database: process.env.DATABASE,
      user: process.env.USER,
      password: process.env.PASSWORD,
      port: 42677
    }
  }

};

module.exports = config;

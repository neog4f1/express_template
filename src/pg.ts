import pg from "pg";
const Pool = pg.Pool;
// const { Pool } = require("pg")

import keys from "./keys";
// const keys = require("./keys")

// Postgres client setup
export const pgClient = new Pool({
  user: keys.pgUser,
  password: keys.pgPassword,
  host: keys.pgHost,
  port: keys.pgPort,
  database: keys.pgDatabase,
});

// Connect to Postgres
export function connectDb() {
  pgClient.on("connect", (client) => {
    client
      .query("CREATE TABLE IF NOT EXISTS values (number INT)")
      .catch((err) => console.log("PG ERROR", err));
  });
  // pgClient.on("error", () => console.log("Lost PG connection"))
}

const db = {
  client: "sqlite3",
  connection: ":memory:",
  useNullAsDefault: true,
  migrations: {
    directory: "./src/db/migrations",
  },
  seeds: {
    directory: "./src/db/seeds",
  },
};

export default db;

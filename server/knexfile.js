const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, `.env.${process.env.NODE_ENV || "dev"}`) });

const config = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URI,
    searchPath: ["knex", "public"],
    migrations: {
      directory: "./src/db/migrations",
    },
    seeds: {
      directory: "./src/db/seeds",
    },
  },
};

module.exports = config;

// module.exports = {
//   development: {
//     client: "postgresql",
//     connection: process.env.DATABASE_URI,
//     migrations: {
//       directory: "./src/db/migrations",
//     },
//     seeds: {
//       directory: "./src/db/seeds",
//     },
//   },

//   staging: {
//     client: "postgresql",
//     connection: {
//       database: "my_db",
//       user: "username",
//       password: "password",
//     },
//     pool: {
//       min: 2,
//       max: 10,
//     },
//     migrations: {
//       tableName: "knex_migrations",
//     },
//   },

//   production: {
//     client: "postgresql",
//     connection: {
//       database: "my_db",
//       user: "username",
//       password: "password",
//     },
//     pool: {
//       min: 2,
//       max: 10,
//     },
//     migrations: {
//       tableName: "knex_migrations",
//     },
//   },
// };

import knex from "knex";
import db_config from "../config/db_lite.js";

const db = knex(db_config);

async function runMigration() {
  try {
    await db.migrate.latest();
    console.log("Migrations completed successfully.");
    await db.seed.run();
    console.log("Seeds completed successfully.");
  } catch (error) {
    console.error("Error running migrations & seed:", error);
  }
}

async function destroyConnection() {
  if (db) {
    await db.destroy();
    console.log("Database closed");
  }
}

async function rollbackMigration() {
  await db.migrate.rollback();
}

export { runMigration, destroyConnection, rollbackMigration };

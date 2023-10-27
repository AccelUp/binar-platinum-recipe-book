import db from "../../config/db.js";

async function runMigration() {
  try {
    await db.migrate.latest();
    console.log("Migration succesful.");
    await db.seed.run();
    console.log("Seeds run succesful.");
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

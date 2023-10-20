/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable("review", (table) => {
    table.uuid("id");
    table.text("title");
    table.text("review");
    table.uuid("user_id").references("id").inTable("users");
    table.uuid("recipe_id").references("id").inTable("recipe");

    table.timestamps(true, true);
  });
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable("review");
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable("user_profiles", (table) => {
    table.uuid("user_id").references("id").inTable("users");
    table.text("full_name");
    table.text("address");
    table.date("birth_date");
    table.timestamps(true, true);
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable("user_profiles");
}

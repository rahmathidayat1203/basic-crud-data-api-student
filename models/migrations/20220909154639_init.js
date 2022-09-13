/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("student", function (table) {
    table.increments("id");
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("nim").notNullable();
    table.string("address").notNullable();
    table.string("faculty").notNullable();
    table.string("major").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.string("status").notNullable();
    table.timestamps();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("student");
};

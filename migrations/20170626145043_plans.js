exports.up = function(knex) {
  return knex.schema.createTable('plans', (table) => {
    table.increments();
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE');
    table.timestamps(true, true);
  })
}


exports.down = function(knex) {
  return knex.schema.dropTable('plans');
};

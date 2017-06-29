
exports.up = function(knex) {
  return knex.schema.createTable('questions', (table) => {
    table.increments();
    table
      .integer('plan_id')
      .references('id')
      .inTable('plans')
      .notNullable()
      .onDelete('CASCADE');
    table.string('exit').notNullable().unique();
    table.string('wallet').notNullable().unique();
    table.string('neighbor').notNullable().unique();
    table.string('child_code').notNullable().unique();
    table.string('location_one').notNullable().unique();
    table.string('location_two').notNullable().unique();
    table.string('room').notNullable().unique();
    table.string('extra_money').notNullable().unique();
    table.string('extra_docs').notNullable().unique();
    table.string('backup_one').notNullable().unique();
    table.string('backup_two').unique();
    table.string('extra_clothes').notNullable().unique();
    table.string('review').notNullable().unique();
    table.string('also').notNullable().unique();
    table.string('partner_using').notNullable().unique();
    table.string('also_two').notNullable().unique();
    table.string('protect_one').notNullable().unique();
    table.string('protect_two').unique();
    table.string('state_police').notNullable().unique();
    table.string('county_police').notNullable().unique();
    table.string('county_sheriff').notNullable().unique();
    table.string('shelter_one').notNullable().unique();
    table.string('shelter_two').unique();
    table.timestamps(true, true);
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('questions');
};

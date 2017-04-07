//creates a table
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("monsters", (table)=> {
    table.increments("monster_id").primary();
    table.string("monster_name").notNullable();
  })
};


//destroys a table
exports.down = (knex, Promise)=> {
  return knex.schema
    .dropTable("monsters")
};

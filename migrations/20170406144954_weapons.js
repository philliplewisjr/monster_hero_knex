
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("weapons", (table)=>{
    table.increments("weapons_id").primary()
    table.string("name").notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  dropTable("weapons")
};

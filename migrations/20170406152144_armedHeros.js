
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("armedHeros", (table)=>{
    table.increments()
    table.integer("hero_id").references("heroes.hero_id")
    table.integer("weapons_id").references("weapons.weapons_id")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTable("armedHeros")
};


//runs on migrate:latest
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("battles", function(table){
    table.increments("battle_id").primary()
    table.string("location").notNullable()
    table.integer("hero_id").references("heroes.hero_id")
    table.integer("monster_id").references("monsters.monster_id")
  })
};

//runs on migrate:rollback
exports.down = function(knex, Promise) {
  return knex.schema
  .dropTable("battles")
};


exports.up = (knex, Promise)=> {
  return knex.schema
  .createTable('heroes', (table)=> {
    table.increments('hero_id').primary()
    table.string('hero_name').notNullable();
  })
};

//run on rollback
exports.down = (knex, Promise)=> {
  return knex.schema
  .dropTable('heroes')
};

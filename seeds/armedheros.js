
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('armedheroes').del()
    .then(function () {
      // Inserts seed entries
      return knex('armedheroes').insert([
        {hero_id: 1, weapons_id: 3},
        {hero_id: 3, weapons_id: 2},
        {hero_id: 2, weapons_id: 1},
      ]);
    });
};

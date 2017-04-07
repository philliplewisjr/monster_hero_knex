
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("battles").del()
    .then( function() {
      // Inserts seed entries
      return knex("battles").insert([
        {location: 'Africa', hero_id: 1, monster_id: 1},
        {location: 'China', hero_id: 2, monster_id: 2},
        {location: 'India', hero_id: 3, monster_id: 3}
      ]);
    });
};

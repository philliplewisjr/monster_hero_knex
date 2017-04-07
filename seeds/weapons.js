
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('weapons').del()
    .then(function () {
      // Inserts seed entries
      return knex('weapons').insert([
        {name: "compact bow"},
        {name: "filipino fighting sticks"},
        {name: "Khopesh"}
      ]);
    });
};

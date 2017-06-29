exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('plans').del()
    .then(function () {
      return Promise.all([
        knex('plans').insert(
          [{
            id: 1,
            user_id: 1,
            created_at: new Date('2017-06-24 14:26:16 UTC'),
            updated_at: new Date('2017-06-24 14:26:16 UTC')
          }])
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('plans_id_seq', (SELECT MAX(id) FROM plans));")
    });
};

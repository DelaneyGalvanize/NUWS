exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert(
          [{
            id: 1,
            email: 'delaney@nuws.com',
            hashed_password: '$2a$12$jXbRJDI8iSL4fcUfC81ZWe7h9brKsEdvK5qWXLrZ3KBMYESJseFZ',
            created_at: new Date('2017-06-24 14:26:16 UTC'),
            updated_at: new Date('2017-06-24 14:26:16 UTC')
          }])
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));")
    });
};

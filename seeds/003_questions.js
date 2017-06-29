exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      return Promise.all([
        knex('questions').insert(
          [{
            id: 1,
            plan_id: 1,
            exit:'Garage Door, Window in basement',
            wallet: 'next to computer on counter',
            neighbor: 'Bill',
            child_code:'',
            location_one:'',
            location_two:'',
            room:'',
            extra_money:'',
            extra_docs:'',
            backup_one:'',
            backup_two:'',
            extra_clothes:'',
            review:'',
            also: '',
            partner_using:'',
            also_two:'',
            protect_one:'',
            protect_two:'',
            state_police:'',
            county_police:'',
            county_sheriff:'',
            shelter_one:'',
            shelter_two:'',
            created_at: new Date('2017-06-24 14:26:16 UTC'),
            updated_at: new Date('2017-06-24 14:26:16 UTC')
          }])
      ])
    })
    .then(() => {
      return knex.raw("SELECT setval('questions_id_seq', (SELECT MAX(id) FROM questions));")
    });
};

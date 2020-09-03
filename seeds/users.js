const faker = require('faker');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(() => {
      // Inserts seed entries
      const rowData = [];
      for (let i = 1; i < 20; i++) {
        rowData.push({
          id: i,
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          bio: faker.lorem.sentence(),
        });
      }
      return knex('users').insert(rowData);
    });
};

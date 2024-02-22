'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Ignat',
          email: 'abcd@mail.ru',
          password: '122344411',
          score: 1475,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Marat',
          email: 'abcd111@mail.ru',
          password: '122344411',
          score: 1474,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Borat',
          email: '666@mail.ru',
          password: '122344411',
          score: 666,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};

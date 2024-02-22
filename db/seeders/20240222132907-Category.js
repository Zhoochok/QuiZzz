'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'Неинтересные факты',
          image: 'Неинтересные факты',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Шутка за шуткой',
          image: 'Шутка за шуткой',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};

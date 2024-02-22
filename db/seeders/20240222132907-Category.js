'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'Неинтересные факты',
          image: 'https://cs421418.userapi.com/v421418431/89a3/1mpk2ji9GaI.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Шутка за шуткой',
          image: 'https://www.1s-up.ru/wp-content/uploads/2017/04/%D0%91%D0%B5%D1%81%D0%BA%D0%BE%D0%BD%D0%B5%D1%87%D0%BD%D0%B0%D1%8F%D0%A0%D0%B5%D0%BA%D1%83%D1%80%D1%81%D0%B8%D1%8F.jpg',
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

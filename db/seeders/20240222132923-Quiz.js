'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Quizzes',
      [
        {
          categoryId: 1,
          question: 'Неинтересные факты',
          image: 'Неинтересные факты',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          question: 'Неинтересные факты',
          image: 'Неинтересные факты',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          question: 'Неинтересные факты',
          image: 'Неинтересные факты',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          question: 'Неинтересные факты',
          image: 'Неинтересные факты',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          question: 'Неинтересные факты',
          image: 'Неинтересные факты',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          question: 'Неинтересные факты',
          image: 'Неинтересные факты',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          question: 'Неинтересные факты',
          image: 'Неинтересные факты',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          question: 'Неинтересные факты',
          image: 'Неинтересные факты',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          question: 'Неинтересные факты',
          image: 'Неинтересные факты',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          question: 'Неинтересные факты',
          image: 'Неинтересные факты',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          question: 'Неинтересные факты',
          image: 'Неинтересные факты',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          question: 'Неинтересные факты',
          image: 'Неинтересные факты',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Quizzes', null, {});
  },
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Quizzes',
      [
        {
          categoryId: 1,
          question: '1 вопрос 1 темы',
          image: 'Неинтересные факты',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          question: '2 вопрос 1 темы',
          image: 'Неинтересные факты',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          question: '3 вопрос 1 темы',
          image: 'Неинтересные факты',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          question: '4 вопрос 1 темы',
          image: 'Неинтересные факты',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          question: '5 вопрос 1 темы',
          image: 'Неинтересные факты',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          question: '5 вопрос 1 темы',
          image: 'Неинтересные факты',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          question: '1 вопрос 2 темы',
          image: 'Неинтересные факты',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          question: '2 вопрос 2 темы',
          image: 'Неинтересные факты',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          question: '3 вопрос 2 темы',
          image: 'Неинтересные факты',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          question: '4 вопрос 2 темы',
          image: 'Неинтересные факты',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          question: '5 вопрос 2 темы',
          image: 'Неинтересные факты',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          question: '6 вопрос 2 темы',
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

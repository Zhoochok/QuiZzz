'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Otvets',
      [
        {
          voprosId: 1,
          name: 'aaa',
          isRight: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 1,
          name: 'bbb',
          isRight: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 1,
          name: 'ccc',
          isRight: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 2,
          name: 'aaa',
          isRight: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 2,
          name: 'bbb',
          isRight: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 2,
          name: 'ccc',
          isRight: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 3,
          name: 'aaa',
          isRight: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 3,
          name: 'bbb',
          isRight: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 3,
          name: 'ccc',
          isRight: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 4,
          name: 'aaa',
          isRight: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 4,
          name: 'bbb',
          isRight: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 4,
          name: 'ccc',
          isRight: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 5,
          name: 'aaa',
          isRight: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 5,
          name: 'bbb',
          isRight: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 5,
          name: 'ccc',
          isRight: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 6,
          name: 'aaa',
          isRight: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 6,
          name: 'bbb',
          isRight: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 6,
          name: 'ccc',
          isRight: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 7,
          name: 'aaa',
          isRight: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 7,
          name: 'bbb',
          isRight: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 7,
          name: 'ccc',
          isRight: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 8,
          name: 'aaa',
          isRight: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 8,
          name: 'bbb',
          isRight: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 8,
          name: 'ccc',
          isRight: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 9,
          name: 'aaa',
          isRight: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 9,
          name: 'bbb',
          isRight: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 9,
          name: 'ccc',
          isRight: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 10,
          name: 'aaa',
          isRight: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 10,
          name: 'bbb',
          isRight: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 10,
          name: 'ccc',
          isRight: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 11,
          name: 'aaa',
          isRight: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 11,
          name: 'bbb',
          isRight: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 11,
          name: 'ccc',
          isRight: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 12,
          name: 'aaa',
          isRight: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 12,
          name: 'bbb',
          isRight: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          voprosId: 12,
          name: 'ccc',
          isRight: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Otvets', null, {});
  },
};
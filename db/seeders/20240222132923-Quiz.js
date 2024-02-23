'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Quizzes',
      [
        {
          categoryId: 1,
          question: 'Кто завербовал Аню?',
          image: 'https://oir.mobi/uploads/posts/2021-05/1620932597_11-oir_mobi-p-zadumchivaya-obezyana-zhivotnie-krasivo-fo-15.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          question: 'Все мы ежедневно бываем на кухне. Холодильник какого производителя стоит справа от левого?',
          image: 'https://ic.pics.livejournal.com/homo_vulgaris/2464891/24920/24920_original.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          question: 'Какое животное пользуется особой популярностью в Польше?',
          image: 'https://image.mel.fm/i/5/5vjhHG6C3I/640.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          question: 'Сколько буйволов сдаст экзамен в ближайшую среду?',
          image: 'https://ornitoterapiya.ru/wp-content/uploads/obezyana-44.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          question: 'Консоль...?',
          image: 'https://ornitoterapiya.ru/wp-content/uploads/obezyana-14.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          question: 'Почему, по мнению Виталия Кличко, нельзя разбрасываться словами?',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVFWDyv6HNE4NgTqvI4uXSIEX-XuY9rJbQa1YqGiieJ_O5mLWMOjxi0fhIzBO5xZ15auU&usqp=CAU',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          question: 'Что общего между бобрами из дикой природы и бобрами Эльбруса?',
          image: 'https://99px.ru/sstorage/53/2016/08/mid_176024_4540.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          question: 'Чего больше всего нужно опасаться в Эльбрусе?',
          image: 'https://trendymen.ru/images/article1/133875/prev1133875.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          question: 'Кем Саша из банды Бобров приходится Никите из банды Буйволов?',
          image: 'https://i.gifer.com/J1Ek.gif',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          question: 'Чем дзюдо и каратэ, лучше старенький...?',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu-KNJpzJSJzXDy8tt4U6EqiZbNoar7IojGXAA63nrrFDhsd5WcyftH2gyXd5EofSHkv4&usqp=CAU',
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

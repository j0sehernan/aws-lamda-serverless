'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let publications = [
      {
        id: 1,
        title: "Los Perros Hambrientos",
        body: "Una familia...",
        dateTime: "1980-05-12 18:08",
        AuthorId: 1,
        createdAt: "1980-05-12",
        updatedAt: "1980-05-12"
      },
      {
        id: 2,
        title: "La Biblia",
        body: "La historia de Jesucristo...",
        dateTime: "1980-02-12 18:08",
        AuthorId: 1,
        createdAt: "1980-02-12",
        updatedAt: "1980-02-12"
      },
      {
        id: 3,
        title: "Harry Potter",
        body: "Los hechiceros...",
        dateTime: "2001-07-29 02:05",
        AuthorId: 2,
        createdAt: "2001-07-29",
        updatedAt: "2001-07-29"
      }
    ];

    await queryInterface.bulkInsert('Publications', publications, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

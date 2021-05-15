'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let authors = [
      {
        id: 1,
        name: "Juan",
        lastName: "Perez",
        email: "juan.perez@gmail.com",
        dateOfBirth: "2000-02-16",
        createdAt: "2000-02-16",
        updatedAt: "2000-02-16"
      },
      {
        id: 2,
        name: "Daniel",
        lastName: "Guevara",
        email: "daniel.guevara@gmail.com",
        dateOfBirth: "1992-07-04",
        createdAt: "1992-07-04",
        updatedAt: "1992-07-04"
      },
      {
        id: 3,
        name: "Cesar",
        lastName: "Fuentes",
        email: "cesar.fuentes@gmail.com",
        dateOfBirth: "1991-11-15",
        createdAt: "1991-11-15",
        updatedAt: "1991-11-15"
      }
    ];

    await queryInterface.bulkInsert('Authors', authors, {});

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

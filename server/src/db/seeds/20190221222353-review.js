'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [{
      userId: 1,
      parkId: 1,
      body: "Great park!",
      rating: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 2,
      parkId: 1,
      body: "Really like spending time here with my dog.",
      rating: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 3,
      parkId: 1,
      body: "One of the best in Atlanta!",
      rating: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
        userId: 1,
        restaurantId: 1,
        body: "Great patio and a fun place to watch sports. Come during tiki season for the full effect.",
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: 2,
        restaurantId: 2,
        body: "A great place but can get really crowded, especially on weekends.",
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reviews", null, {});
  }
};

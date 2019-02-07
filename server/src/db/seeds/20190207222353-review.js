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
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reviews", null, {});
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "Reviews",
      "restaurantId",
      {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Restaurants",
          key: "id",
          as: "reviewId"
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Reviews", "restaurantId");
  }
};
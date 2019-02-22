'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "Reviews",
      "eventId",
      {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Events",
          key: "id",
          as: "eventId"
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Events", "eventId");
  }
};

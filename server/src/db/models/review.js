'use strict';
module.exports = (sequelize, DataTypes) => {
  var Review = sequelize.define('Review', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    parkId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    })

    Review.belongsTo(models.Park, {
      foreignKey: "parkId",
      onDelete: "CASCADE"
    })
  };
  return Review;
};
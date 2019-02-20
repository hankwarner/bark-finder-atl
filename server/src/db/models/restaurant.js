'use strict';
module.exports = (sequelize, DataTypes) => {
  var Restaurant = sequelize.define('Restaurant', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    neighborhood: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(10000),
      allowNull: false
    },
    lat: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: false
    },
    lng: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: false
    }
  }, {});
  Restaurant.associate = function(models) {
    // Restaurant.hasMany(models.Review, {
    //   foreignKey: "restaurantId",
    //   as: "reviews"
    // })
  };
  return Restaurant;
};
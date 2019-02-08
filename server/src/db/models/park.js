'use strict';
module.exports = (sequelize, DataTypes) => {
  var Park = sequelize.define('Park', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true
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
  Park.associate = function(models) {
    Park.hasMany(models.Review, {
      foreignKey: "parkId",
      as: "reviews"
    })
  };
  return Park;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Park = sequelize.define('Park', {
    name: {
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
    description: DataTypes.STRING,
  }, {});
  Park.associate = function(models) {
    Park.hasMany(models.Review, {
      foreignKey: "parkId",
      as: "reviews"
    })
  };
  return Park;
};
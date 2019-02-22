'use strict';
module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define('Event', {
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
  Event.associate = function(models) {
    Event.hasMany(models.Review, {
      foreignKey: "eventId",
      as: "reviews"
    })
  };
  return Event;
};
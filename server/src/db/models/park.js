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
    },
    rating: {
      type: DataTypes.INTEGER
    },
  }, {});
  Park.associate = function(models) {
    Park.hasMany(models.Review, {
      foreignKey: "parkId",
      as: "reviews"
    })

    Park.prototype.getRating = function(){
      if(this.reviews.length === 0) return 0
      var sumOfRatings = this.reviews
        .map((review) => { return review.rating })
        .reduce((prev, next) => { return prev + next }) / this.reviews.length

      return sumOfRatings
    }
  };
  return Park;
};
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Restaurants', [{
      name: "The Midway Pub",
      imageUrl: '../../static/images/midwaypub.jpg',
      address: '552 Flat Shoals Ave SE, Atlanta, GA 30316',
      neighborhood: 'East Atlanta Village',
      description: 'The proclaimed "Atlanta"s Living Room", Midway Pub is a laid back restaurant and bar in EAV. Pups are welcome outside on the patio, and they are likely to have sports playing on the big screen. Seasonally, there is a Tiki Bar open in the back where dogs are also welcomed',
      lat: 33.739632,
      lng: -84.344312,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Ladybird Grove and Mess Hall",
      imageUrl: '../../static/images/ladybird.jpg',
      address: '684 John Wesley Dobbs Ave NE, Atlanta, GA 30312',
      neighborhood: 'Old Fourth Ward/Beltline',
      description: "Ladybird Grove & Mess Hall is the first outdoor-oriented bar and restaurant to open along the BeltLine's Eastside Trail. An in-town home away from home for Atlanta's adventure seekers, Ladybird offers elevated campfire cuisine for dinner, lunch, and weekend brunch, and focuses on sharable dishes that rotate based on local availability. The beverage program features craft cocktails, wine, local beer, alongside housemade juices and sodas.",
      lat: 33.759815,
      lng: -84.364534,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Restaurants", null, {});
  }
};

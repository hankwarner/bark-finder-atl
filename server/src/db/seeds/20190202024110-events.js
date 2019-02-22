'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [{
      name: "Rescue Dog Olympics",
      imageUrl: '../../static/images/olympics.jpg',
      address: '400 Park Dr. NE, Atlanta, GA 30338',
      neighborhood: 'Piedmont Park',
      description: 'Mark your calendars for Rescue Dog Olympics: Fabulous Atlanta Dog Festival & Dog Party!! This dog friendly event will be held from 11 AM to 4 PM on March 10, 2019 at Piedmont Park in Atlanta, GA, US. Admission is free.',
      lat: 33.785169,
      lng: -84.373571,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "4th Annual Party for the Paws",
      imageUrl: '../../static/images/partyforthepaws.jpg',
      address: '2740 Caldwell Rd NE, Atlanta, GA, US, 30319',
      neighborhood: 'Brookhaven',
      description: "This dog friendly event will be held from 11 AM to 3 PM on May 4, 2019 at Puppy Haven (Brookhaven). Admission is free.",
      lat: 33.867809,
      lng: -84.334300,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Events", null, {});
  }
};

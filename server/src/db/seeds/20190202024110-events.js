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
    }, {
      name: "Fast and the Furriest 5k",
      imageUrl: '../../static/images/fast.jpg',
      address: '4770 N. Peachtree Rd., Dunwoody, GA, US, 30338',
      neighborhood: 'Dunwoody',
      description: "The Fast and the Furriest is for runners, walkers, and their dogs! The course starts and finishes at the large pavilion and stays on the paved trails the entire time. \n As a USATF certified 5k course (GA17020WC), this race is an AJC Peachtree Road Race qualifier. The course will have two aid & water stations along the route for runners, walkers and their dogs. Due to the volume of runners and the limited space on the greenway- walkers, dogs and strollers will be asked to stay to the back at the start. \n Event will be held rain or shine. In the event of severe weather making it unsafe for participants, the event will be canceled without refund.",
      lat: 33.935118,
      lng: -84.297424,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Bark in the Park",
      imageUrl: '../../static/images/braves.jpg',
      address: '755 Battery Ave SE, Atlanta, GA 30339',
      neighborhood: 'The Battery',
      description: "The Atlanta Braves are hosting Bark in the Park on Sunday, April 7 at SunTrust Park! With the purchase of this specialty ticket package, you and your dog can come cheer on the Braves as they take on the Miami Marlins at 1:20 p.m. You'll enjoy the game from the rooftop and every dog will receive a Braves water bottle with portable dog bowl.",
      lat: 33.890964,
      lng: -84.467852,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Events", null, {});
  }
};

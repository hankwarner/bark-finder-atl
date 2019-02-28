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
    }, {
      name: "Grindhouse Killer Burgers",
      imageUrl: '../../static/images/grindhouse.jpg',
      address: '701 Memorial Dr SE, Atlanta, GA 30316',
      neighborhood: 'Cabbagetown',
      description: "Grindhouse Killer Burgers serves up arguably Atlanta's best burgers in a casual & fun environment. Cult movies on the TVs (as well as sports), crazy vintage robot themed design and a spacious dog-friendly patio area overlooking Memorial Drive. Water bowls are also provided.",
      lat: 33.746565,
      lng: -84.364755,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Dakota Blue",
      imageUrl: '../../static/images/dakotablue.jpg',
      address: '454 Cherokee Ave SE, Atlanta, GA, US, 30312',
      neighborhood: 'Grant Park',
      description: 'Dakota Blue is a cozy neighborhood bar and grill serving Mexican and American favorites such as honey chipotle wings, southwestern egg rolls, BBQ sandwiches, burgers, fish tacos, and super chicken burritos. Dogs are welcome in the outdoor seating area.',
      lat: 33.742182,
      lng: -84.373306,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Joe's on Juniper",
      imageUrl: '../../static/images/joes.jpg',
      address: '1049 Juniper St NE, Atlanta, GA, US, 30309',
      neighborhood: 'Midtown',
      description: 'Joe\’s On Juniper, a midtown tavern, is open seven days a week, serving an array of traditional American foods, all of which perfectly complement the extensive beer and cocktail list, and offering one of Atlanta\'s favorite dog-friendly outdoor dining spaces. Menu features tasty offerings such as Thai nachos, jumbo fried shrimp, Buffalo chicken salad, Angus beef burgers, tacos, wraps and sandwiches, and white chocolate mousse for dessert.',
      lat: 33.783419,
      lng: -84.382116,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Brewhouse Cafe",
      imageUrl: '../../static/images/brewhouse.jpg',
      address: '401 Moreland Ave NE, Atlanta, GA, US, 30307',
      neighborhood: 'Little 5 Points',
      description: 'Brewhouse Cafe is a hit with the locals who love to bring their dogs and enjoy the casual setting. It\'s also considered by some to be Atlanta\'s best soccar bar',
      lat: 33.765348,
      lng: -84.348884,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Restaurants", null, {});
  }
};

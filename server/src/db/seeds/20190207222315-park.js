'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Parks', [{
      name: "Freedom Barkway",
      imageUrl: '../../static/images/freedombarkway.jpg',
      address: '523 Highland Ave NE, Atlanta, GA 30312',
      neighborhood: 'Old Fourth Ward',
      description: 'Two+ acre park located in the Old Fourth Ward neighborhood, less than one mile from downtown, Atlanta. \n The Freedom Parkway Dog Park is not your ordinary city park. Not at all. The Old Fourth Ward Freedom Barkway Corporation (OFWFBC) was born from the needs and desires of the four Old Fourth Ward neighborhood associations. The dog owning residents of the Old Fourth Ward wanted to be able to walk their dogs to a place where the dogs could get proper exercise and play freely and safely with other dogs while not being on a leash.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Piedmont Dog Park",
      imageUrl: '../../static/images/piedmont.jpg',
      address: '400 Park Dr NE, Atlanta, GA 30306',
      neighborhood: 'Midtown',
      description: 'Piedmont Park is a haven for dogs and humans alike! While a City of Atlanta ordinance requires all dogs in public areas to be leashed, Piedmont Dog Park is one of the few locations in metro Atlanta where dogs may run free, off the leash. Since 2002, this special off-leash area is one of the most popular features of Piedmont Park.',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Parks", null, {});
  }
};

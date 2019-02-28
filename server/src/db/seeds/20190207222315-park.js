'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Parks', [{
      name: "Freedom Barkway",
      imageUrl: '../../static/images/freedombarkway.jpg',
      address: '523 Highland Ave NE, Atlanta, GA 30312',
      neighborhood: 'Old Fourth Ward',
      description: 'Two+ acre park located in the Old Fourth Ward neighborhood, less than one mile from downtown, Atlanta. \n The Freedom Parkway Dog Park is not your ordinary city park. Not at all. The Old Fourth Ward Freedom Barkway Corporation (OFWFBC) was born from the needs and desires of the four Old Fourth Ward neighborhood associations. The dog owning residents of the Old Fourth Ward wanted to be able to walk their dogs to a place where the dogs could get proper exercise and play freely and safely with other dogs while not being on a leash.',
      lat: 33.760908,
      lng: -84.369913,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Piedmont Dog Park",
      imageUrl: '../../static/images/piedmont2.jpg',
      address: '400 Park Dr NE, Atlanta, GA 30306',
      neighborhood: 'Midtown',
      description: 'Piedmont Park is a haven for dogs and humans alike! While a City of Atlanta ordinance requires all dogs in public areas to be leashed, Piedmont Dog Park is one of the few locations in metro Atlanta where dogs may run free, off the leash. Since 2002, this special off-leash area is one of the most popular features of Piedmont Park.',
      lat: 33.787954,
      lng: -84.371245,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Park Grounds",
      imageUrl: '../../static/images/parkgrounds.jpg',
      address: '142 Flat Shoals Ave SE, Atlanta, GA 30316',
      neighborhood: 'Reynoldstown',
      description: 'Enjoy coffee, food, drinks, and WiFi at ParkGrounds Coffee. While you sip, your dog can enjoy some doggy playtime with other canines in the attached, fully fenced dog park. Just make sure your dog is friendly and well-socialized so that everyone enjoys their time! ParkGrounds is open Monday-Friday: 7:30am-9:00pm; Saturday and Sunday: 8:00am-9:00pm',
      lat: 33.750153,
      lng: -84.354610,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "South Bend Dog Park",
      imageUrl: '../../static/images/southbend.jpg',
      address: '2000 Lakewood Ave SE, Atlanta, GA 30315',
      neighborhood: 'Lakewood',
      description: 'This doggy oasis in Lakewood Heights, across from Lakewood Amphitheater, has plenty of shade trees, climbing rocks and room to play. For the humans, there\'s a lovely view from its hilltop location, a tree swing and peace of mind provided by the separate large and small dog areas.',
      lat: 33.700478,
      lng: -84.388795,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Oakhurst Dog Park",
      imageUrl: '../../static/images/oakhurst.jpg',
      address: '450 E. Lake Dr.Atlanta, GA 30307',
      neighborhood: 'East Lake',
      description: 'This clean, spacious dog park provides drinking water for fuzzy buddies and nice benches for humans. Pros: Nice wooded trails, friendly people. Cons: Gets a bit muddy after rain, small and large dogs in the same space.',
      lat: 33.761757,
      lng: -84.308756,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Adair Dog Park",
      imageUrl: '../../static/images/adair.jpg',
      address: '600 W Trinity Pl, Decatur, GA 30030',
      neighborhood: 'Downtown Decatur',
      description: 'This Decatur favorite has a doggy water fountain, lots of shaded areas and both flat and hilly areas. There is more than enough room for even large dogs to tire themselves out. Owners of tiny and/or shy dogs beware though: pups of all sizes are allowed to play together here.',
      lat: 33.772334,
      lng: -84.305395,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Renaissance Park Dog Park",
      imageUrl: '../../static/images/renaissance.jpg',
      address: '240 Renaissance Parkway NE, Atlanta, GA 30308',
      neighborhood: 'SoNo',
      description: 'Prior to the opening of the dog park last November, this 5.5-acre Old Fourth Ward park was known for its drug dealers and panhandlers. Now it\'s a place for the growing O4W community to come together with their fluffy pals. Water fountains, shade and separate areas for large and small dogs are provided.',
      lat: 33.768511,
      lng: -84.378280,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Atlantic Station Dog Park",
      imageUrl: '../../static/images/atlanticstation.jpg',
      address: '240 Renaissance Pkwy NE, Atlanta, GA 30308',
      neighborhood: 'Atlantic Station',
      description: 'Not what you\'d call roomy, this cozy dog park is ideal for petite, apartment-dwelling pups who enjoy things like make-believe fire hydrants. Larger dogs won\'t even be able to hit full speed before getting to the fence, so don\'t bother bringing your greyhound.',
      lat: 33.768645,
      lng: -84.378264,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Brook Run Dog Park",
      imageUrl: '../../static/images/brookrun.jpg',
      address: '4770 N Peachtree Rd, Dunwoody, GA 30338',
      neighborhood: 'Dunwoody',
      description: 'This well-maintained, volunteer-run Dunwoody favorite gives visitors\' furry companions nearly three acres of running and playing space. There are wooded walking trails for humans to enjoy, but no bathrooms. Know before you go.',
      lat: 33.935212,
      lng: -84.297445,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Mason Mill Dog Park",
      imageUrl: '../../static/images/masonmill.jpg',
      address: '1340 McConnell Drive, Decatur, GA 30033',
      neighborhood: 'North Druid Hills',
      description: 'The PATH Foundation\'s South Peachtree Creek Trail runs right into this clean, recently updated park so you can take Fido for a leashed walk along the trail before turning him loose in the smaller (half acre) fenced-in area.',
      lat: 33.807970,
      lng: -84.307350,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Parks", null, {});
  }
};

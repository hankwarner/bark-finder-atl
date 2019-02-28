const Park = require('../models').Park
const Review = require('../models').Review
const User = require('../models').User

module.exports = {
  async getAllParks(callback) {
    try {
      let parks = await Park.all({
        include: [{
          model: Review,
          as: "reviews"
        }],
        order: [
          ['name', 'ASC'],
        ]
      })

      parks.forEach((park) => {
        park.rating = park.getRating()
      })
      
      return callback(null, parks)
        
    } catch(error) {
      console.log(error)
      callback(error)
    }
  },

  async getPark(id, callback){
    try {
      let park = await Park.findById(id, {
        include: [{
          model: Review,
          as: "reviews",
          include: [{model: User}]
        }]
      })

      park.rating = park.getRating()
      
      return callback(null, park)
    
    } catch(error) {
      console.log(error)
      callback(error)
    }
  }
}
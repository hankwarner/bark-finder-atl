const Park = require('../models').Park
const Review = require('../models').Review

module.exports = {
  async getAllParks(callback) {
    try {
      let parks = await Park.all()
      return callback(null, parks)
        
    } catch(error) {
      console.log(error)
      callback(error)
    }
  },

  async getPark(id, callback){
    try {
      let park = Park.findById(id, {
        include: [{
          model: Review,
          as: "reviews"
        }]
      })
      return callback(null, park)
    
    } catch(error) {
      console.log(error)
      callback(error)
    }
  }
}
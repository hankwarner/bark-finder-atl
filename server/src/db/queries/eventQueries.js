const Event = require('../models').Event
const Review = require('../models').Review
const User = require('../models').User

module.exports = {
  async getAllEvents(callback) {
    try {
      let events = await Event.all({
        include: [{
          model: Review,
          as: "reviews"
        }],
        order: [
          ['name', 'ASC'],
        ]
      })

      events.forEach((event) => {
        event.rating = event.getRating()
      })

      return callback(null, events)
        
    } catch(error) {
      console.log(error)
      callback(error)
    }
  },

  async getEvent(id, callback){
    try {
      let event = await Event.findById(id, {
        include: [{
          model: Review,
          as: "reviews",
          include: [{model: User}]
        }]
      })

      event.rating = event.getRating()
      
      return callback(null, event)
    
    } catch(error) {
      console.log(error)
      callback(error)
    }
  }
}
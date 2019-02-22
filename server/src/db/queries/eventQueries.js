const Event = require('../models').Event
const Review = require('../models').Review
const User = require('../models').User

module.exports = {
  async getAllEvents(callback) {
    try {
      let events = await Event.all()
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
      return callback(null, event)
    
    } catch(error) {
      console.log(error)
      callback(error)
    }
  }
}
const Restaurant = require('../models').Restaurant
const Review = require('../models').Review

module.exports = {

    async getAllRestaurants(callback) {
        try {
            let restaurants = await Restaurant.all()
            return callback(null, restaurants)
            
        } catch(error) {
            console.log(error)
            callback(error)
        }
    },

    async getRestaurant(id, callback){
        try {
            let restaurant = await Restaurant.findById(id, {
                include: [{
                    model: Review,
                    as: "reviews"
                }]
            })
            return callback(null, restaurant)
        
        } catch(error) {
            console.log(error)
            callback(error)
        }
    }
}
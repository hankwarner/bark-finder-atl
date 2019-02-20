const Restaurant = require('../models').Restaurant
const Review = require('../models').Review
const User = require('../models').User

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
                    as: "reviews",
                    include: [{model: User}]
                }]
            })
            return callback(null, restaurant)
        
        } catch(error) {
            console.log(error)
            callback(error)
        }
    }
}
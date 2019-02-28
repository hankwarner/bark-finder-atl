const Restaurant = require('../models').Restaurant
const Review = require('../models').Review
const User = require('../models').User

module.exports = {
    async getAllRestaurants(callback) {
        try {
            let restaurants = await Restaurant.all({
                include: [{
                    model: Review,
                    as: "reviews"
                }]
            })

            restaurants.forEach((restaurant) => {
                restaurant.rating = restaurant.getRating()
            })

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

            restaurant.rating = restaurant.getRating()

            return callback(null, restaurant)
        
        } catch(error) {
            console.log(error)
            callback(error)
        }
    }
}
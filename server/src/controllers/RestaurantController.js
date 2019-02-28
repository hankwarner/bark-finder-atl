const restaurantQueries = require('../db/queries/restaurantQueries')

module.exports = {
    index(req, res, next){
        restaurantQueries.getAllRestaurants((err, restaurants) => {
            if(err){
                console.log(err)
                //send error back to client
                res.status(400).send(err.message)
            } else {
                //send restaurants back to client
                res.send(restaurants)
            }
        })
    },

    show(req, res, next) {
        restaurantQueries.getRestaurant(req.params.id, (err, restaurant) => {
            if(err || restaurant == null) {
                console.log(err)
                res.status(400).send(err.message)
            } else {
                res.send(restaurant)
            }
        })
    }
  }
const AuthenticationController = require('./controllers/AuthenticationController')
const ParkController = require('./controllers/ParkController')
const ReviewController = require('./controllers/ReviewController')
const RestaurantController = require('./controllers/RestaurantController')
const validation = require("./validation")
const helper = require("./auth/helpers")

module.exports = (app) => {
    //User routes
    app.post('/register', validation.validatePasswords, AuthenticationController.register)
    app.post('/login', AuthenticationController.login),
    
    //Park routes
    app.get('/parks', ParkController.index),
    app.get('/parks/:id', ParkController.show),
    app.post('/parks/:id/review/create', helper.ensureAuthenticated, ReviewController.create)
    app.post('/parks/:id/review/destroy', ReviewController.destroy)

    //Restaurant routes
    app.get('/restaurants', RestaurantController.index),
    app.get('/restaurants/:id', RestaurantController.show),
    app.post('/restaurants/:id/review/create', helper.ensureAuthenticated, ReviewController.create)
    app.post('/restaurants/:id/review/destroy', ReviewController.destroy)
}

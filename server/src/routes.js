const AuthenticationController = require('./controllers/AuthenticationController')
const ParkController = require('./controllers/ParkController')
const ReviewController = require('./controllers/ReviewController')
const RestaurantController = require('./controllers/RestaurantController')
const EventController = require('./controllers/EventController')
const validation = require("./validation")
const helper = require("./auth/helpers")

module.exports = (app) => {
    //User routes
    app.post('/register', validation.validatePasswords, AuthenticationController.register)
    app.post('/login', AuthenticationController.login)
    app.post('/send_reset_email', AuthenticationController.sendResetPasswordEmail)
    app.get('/get_user/:id/:token', AuthenticationController.getUser)
    app.post('/reset_password', validation.validatePasswords, AuthenticationController.resetPassword)
    
    //Park routes
    app.get('/parks', ParkController.index)
    app.get('/parks/:id', ParkController.show)
    app.post('/parks/:id/review/create', helper.ensureAuthenticated, ReviewController.create)
    app.post('/parks/:parkId/review/:id/destroy', ReviewController.destroy)

    //Restaurant routes
    app.get('/restaurants', RestaurantController.index)
    app.get('/restaurants/:id', RestaurantController.show)
    app.post('/restaurants/:id/review/create', helper.ensureAuthenticated, ReviewController.create)
    app.post('/restaurants/:id/review/destroy', ReviewController.destroy)

    //Event routes
    app.get('/events', EventController.index)
    app.get('/events/:id', EventController.show)
    app.post('/events/:id/review/create', helper.ensureAuthenticated, ReviewController.create)
    app.post('/events/:id/review/destroy', ReviewController.destroy)
}

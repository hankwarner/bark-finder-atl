const AuthenticationController = require('./controllers/AuthenticationController')
const ParkController = require('./controllers/ParkController')
const ReviewController = require('./controllers/ReviewController')
const validation = require("./validation")
const helper = require("./auth/helpers")

module.exports = (app) => {
    app.post('/register', validation.validatePasswords, AuthenticationController.register)
    app.post('/login', AuthenticationController.login),
    app.get('/parks', ParkController.index),
    app.get('/parks/:id', ParkController.show),
    app.post('/parks/:id/review/create', helper.ensureAuthenticated, ReviewController.create)
    app.post('/parks/:id/review/destroy', ReviewController.destroy)
}

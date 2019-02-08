const AuthenticationController = require('./controllers/AuthenticationController')
const ParkController = require('./controllers/ParkController')
const ReviewController = require('./controllers/ReviewController')

module.exports = (app) => {
    app.post('/register', AuthenticationController.register)
    app.post('/login', AuthenticationController.login),
    app.get('/parks', ParkController.index),
    app.get('/parks/:id', ParkController.show),
    app.post('/parks/:id/review/create', ReviewController.create)
}

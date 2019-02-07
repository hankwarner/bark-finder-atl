const AuthenticationController = require('./controllers/AuthenticationController')
const ParkController = require('./controllers/ParkController')

module.exports = (app) => {
    app.post('/register', AuthenticationController.register)
    app.post('/login', AuthenticationController.login),
    app.get('/parks', ParkController.index),
    app.get('/parks/:id', ParkController.show)
}

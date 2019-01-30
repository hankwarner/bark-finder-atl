const authenticationQueries = require('../db/queries/authenticationQueries')

module.exports = {
    register(req, res) {
        
        let newUser = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        }

        authenticationQueries.createUser(newUser, (err, user) => {
            if(err) {
                res.status(400).send({
                    error: 'Account is already in use or is invalid'
                })
            } else {
                res.send(user.toJSON())
            }
        })

    }
}
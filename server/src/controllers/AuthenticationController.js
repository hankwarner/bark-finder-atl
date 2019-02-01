const authenticationQueries = require('../db/queries/authenticationQueries')
const passport = require("passport")

module.exports = {
    register(req, res) {
        let newUser = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        }
        authenticationQueries.createUser(newUser, (err, user) => {
            if(err) {
                res.status(400).send(err.message)
            } else {
                passport.authenticate("local")(req, res, () => {
                    req.flash("notice", "You've successfully signed in!");
                    res.send(user.toJSON())
                })
            }
        })

    },

    login(req, res) {
        passport.authenticate("local")(req, res, function () {
            if(!req.user){
                //not showing in console when login fails
                console.log('improper credentials')
                req.flash("notice", "Sign in failed. Please try again.")
            } else {
                console.log('you have successfully logged in')
                res.send(req.user.toJSON())
                req.flash("notice", "You've successfully signed in!")
            }
        })
    }
}
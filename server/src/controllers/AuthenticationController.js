const authenticationQueries = require('../db/queries/authenticationQueries')
const passport = require("passport")
const User = require('../db/models').User
const jwtSecret = require('../config/jwtConfig')
const jwt = require('jsonwebtoken')

module.exports = {
    register(req, res) {
        let newUser = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        }

        authenticationQueries.createUser(newUser, (err, user) => {
            if(err) {
                res.status(400).send(err.message)
            } else {
                passport.authenticate("local")(req, res, () => {
                    req.logIn(user, err => {
                        User.findOne({
                            where: {
                                username: user.username
                            },
                        })
                        .then(user => {
                            const token = jwt.sign({ id: user.username }, jwtSecret.secret)
                            res.status(200).send({
                                auth: true,
                                token: token,
                                message: 'Registration successful',
                                user: user
                            })
                        })
                        .catch((err) => {
                            console.log(err)
                            res.status(400).send(err.message)
                        })
                    })
                })
            }
        })

    },

    login(req, res, next) {
        passport.authenticate('login', (err, user, info) => {
            if(err) {
                console.log(err)
                res.status(400).send(err.message)
            }
            if(info !== undefined) {
                console.log(info.message)
                res.send(info.message)
            } else {
                req.logIn(user, err => {
                    User.findOne({
                        where: {
                            username: user.username
                        },
                    })
                    .then(user => {
                        const token = jwt.sign({ id: user.username }, jwtSecret.secret)
                        res.status(200).send({
                            auth: true,
                            token: token,
                            message: 'Login successful',
                            user: user
                        })
                    })
                    .catch((err) => {
                        res.status(400).send(err.message)
                    })
                })
            }
        })(req, res, next)
    }
}
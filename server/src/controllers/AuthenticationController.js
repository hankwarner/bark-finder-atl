const authenticationQueries = require('../db/queries/authenticationQueries')
const passport = require("passport")
const User = require('../db/models').User
const jwtSecret = require('../config/jwtConfig')
const jwt = require('jsonwebtoken')
const sgMail = require('@sendgrid/mail')

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
    },

    sendResetPasswordEmail(req, res, next) {
        //find user email in db
        
        const sgMail = require('@sendgrid/mail')

        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        
        //send a token via the email
        const msg = {
            to: req.body.email,
            from: 'no-reply@barkfinderatl.com',
            subject: 'Password Reset Request',
            text: 'You have requested a password reset for your Bark Finder ATL account. Please follow this link to reset your password: https://barkfinderatl.netlify.com/#/reset_password',
            html: 'You have requested a password reset for your Bark Finder ATL account. Please follow <a href="https://barkfinderatl.netlify.com/#/reset_password">this link</a> to reset your password.'
        }
        sgMail.send(msg)

        res.status(400).send('Your password reset request has been submitted. Please check your email for next steps.')
    }
}
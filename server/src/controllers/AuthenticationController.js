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
                            var token = jwt.sign({ id: user.username }, jwtSecret.secret)
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

    async sendResetPasswordEmail(req, res) {
        const userEmail = req.body.email;
        var base;
        const getURLBase = () => {
            if(process.env.NODE_ENV === 'development') {
                base = 'http://localhost:8080/#/reset_password';
            } else {
                base = 'https://barkfinderatl.netlify.com/#/reset_password';
            }
        }
        try {
            let user = await User.findOne({
                where: {
                    email: userEmail
                }
            })

            if(!user) return res.status(403).send('Email does not match a record in our system');

            var secret = user.password + user.createdAt;
            var token = jwt.sign({ id: user.id }, secret);

            const sgMail = require('@sendgrid/mail');
            sgMail.setApiKey(process.env.SENDGRID_API_KEY);
            getURLBase();
            const msg = {
                to: userEmail,
                from: 'no-reply@barkfinderatl.com',
                subject: 'Password Reset Request',
                text: 'You have requested a password reset for your Bark Finder ATL account. Please follow this link to reset your password: https://barkfinderatl.netlify.com/#/reset_password',
                html: `You have requested a password reset for your Bark Finder ATL account. Please follow <a href="${base}/${user.id}/${token}">this link</a> to reset your password.`
            };
            sgMail.send(msg);
            return res.status(200).send('Your password reset request has been submitted. Please check your email for next steps.');
        } catch (err) {
            console.log(err);
            return res.status(400).send(err);
        }
    },

    async getUser(req, res) {
        const userId = req.params.id;
        try {
            const user = await authenticationQueries.getUserById(userId, (err, user) => {
                return res.status(200).send(user);
            })
        } catch (err) {
            console.log(err);
            return res.status(400).send(err);
        }
    },

    async resetPassword(req, res) {
        let userIdAndNewPassword = {
            userId: req.params.userId,
            token: req.params.token,
            password: req.body.password
        }
        
        try {
            //reset the users password here in queries
            var user = await authenticationQueries.resetPassword(userIdAndNewPassword, (err, user) => {
                // if (err) {
                //     console.log(err)
                //     res.status(400).send(err.message)
                // } else {
                    return res.status(200).send(user.id)
                // }
            })
        } catch (err) {
            console.log(err);
            return res.status(400).send(err);
        }

    }
}
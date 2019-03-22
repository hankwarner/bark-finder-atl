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
                        authenticationQueries.getUserByUsername(user.username, (err, user) => {
                            if(err || !user) {
                                console.log(err);
                                res.status(400).send(err.message);
                            } else {
                                var token = jwt.sign({ id: user.username }, jwtSecret.secret)
                                res.status(200).send({
                                    auth: true,
                                    token: token,
                                    message: 'Registration successful',
                                    user: user
                                })
                            }
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
                    authenticationQueries.getUserByUsername(user.username, (err, user) => {
                        if(err || !user) {
                            console.log(err);
                            res.status(400).send(err.message);
                        } else {
                            var token = jwt.sign({ id: user.username }, jwtSecret.secret)
                            res.status(200).send({
                                auth: true,
                                token: token,
                                message: 'Login successful',
                                user: user
                            })
                        }
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
            authenticationQueries.getUserByEmail(userEmail, (err, user) => {
                if(err || !user) {
                    console.log(err);
                    res.status(403).send(err.message);
                } else {
                    var secret = user.password + user.createdAt;
                    var token = jwt.sign({ user }, secret, { expiresIn: 600 });

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
                }
            })
        } catch (err) {
            console.log(err);
            return res.status(400).send(err);
        }
    },

    async getUser(req, res) {
        var userId = req.params.id;
        var userToken = req.params.token;

        authenticationQueries.getUserById(userId, (err, user) => {
            var secret = user.password + user.createdAt;
            //TODO move to authHelpers
            //TODO get rid of this function all together and mvoe this into resetPassword function
            jwt.verify(userToken, secret, (payload) => {
                try {
                    if(payload.name.includes('Error')) {
                        res.status(400)
                        throw 'Token is expired'
                    } else {
                        return res.status(200).send(user);
                    }
                } catch (err) {
                    res.status(400).send(err);
                }
            });
        });
    },

    async resetPassword(req, res) {        
        try {
            let userIdAndNewPassword = {
                userId: req.body.userId,
                token: req.body.token,
                password: req.body.password
            };

            var passwordReset = await authenticationQueries.resetPassword(userIdAndNewPassword, (err, user) => {
                return res.status(200).send('Password successfully reset');
            });

        } catch (err) {
            console.log(err);
            return res.status(400).send(err);
        }
    }
}
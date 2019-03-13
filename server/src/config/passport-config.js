const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JWTStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require("../db/models").User;
const authHelper = require("../auth/helpers");
const bcrypt = require("bcryptjs");

module.exports = {
  init(app){

    app.use(passport.initialize());

    passport.use(
      new LocalStrategy(
        {
          usernameField: 'username',
          passwordField: 'password',
          session: false
        },
        (username, password, done) => {
          User.findOne({
            where: {
              username: username
            },
          })
          .then((user) => {
            if (!user || !authHelper.comparePass(password, user.password)) {
              return done(null, false, { message: "Bad username or password" });
            } else {
              return done(null, user);
            }
          })
          .catch((err) => {
            console.log(err)
            done()
          })

        }
      )
    )

    passport.use(
      'login',
      new LocalStrategy(
        {
          usernameField: 'username',
          passwordField: 'password',
          session: false,
        },
        (username, password, done) => {
          User.findOne({
            where: {
              username: username,
            },
          })
          .then(user => {
            if(!authHelper.comparePass(password, user.password)){
              return done(null, false, { message: "Invalid username and password combination" });
            } else {
              return done(null, user)
            }
          })
          .catch((err) => {
            console.log(err)
            done(err)
          })
        } 
      ),
    )

    const opts = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
      secretOrKey: process.env.SECRET_OR_KEY
    }

    passport.use(
      'jwt',
      new JWTStrategy(opts, (jwt_payload, done) => {
        try {
          User.findOne({
            where: {
              username: jwt_payload.id
            },
          }).then(user => {
            if (user) {
              console.log('user not found')
              done(null, user)
            } else {
              console.log('user not found in db')
              done(null, false)
            }
          })
        } catch(err) {
          done(err)
        }
      })
    )
  }
}
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
          try {
            User.findOne({
              where: {
                username: username
              },
            }).then(user => {
              if (!user || !authHelper.comparePass(password, user.password)) {
                return done(null, false, { message: "Invalid username or password" });
              }
              return done(null, user);
            })
          } catch(err) {
            done(err)
          }
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
          try {
            User.findOne({
              where: {
                username: username,
              },
            }).then(user => {
              if (user === null) {
                return done(null, false, { message: 'bad username' })
              } else {
                bcrypt.compare(password, user.password).then(response => {
                  if (response !== true) {
                    console.log('passwords do not match')
                    return done(null, false, { message: 'passwords do not match' })
                  }
                  console.log('user found & authenticated')
                  return done(null, user);
                })
              }
            })
          } catch (err) {
            done(err)
          }
        },
      ),
    );

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

    // app.use(passport.session());




    // passport.use(new LocalStrategy({
    //   usernameField: "username"
    // }, async (username, password, done) => {
      
    //     let user = await User.findOne({
    //         where: { username }
    //     })

    //     if (!user || !authHelper.comparePass(password, user.password)) {
    //       return done(null, false, { message: "Invalid login credentials." });
    //     }
        
    //     return done(null, user);
    // }));

    // passport.serializeUser((user, callback) => {
    //   callback(null, user.id);
    // });

    // passport.deserializeUser(async (id, callback) => {
    //   try {
    //     let user = await User.findById(id)
    //     return callback(null, user);

    //   } catch(err) {
    //     return callback(err, user);
    //   }
    // })
  }
}
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../db/models").User;
const authHelper = require("../auth/helpers");

module.exports = {
  init(app){

    app.use(passport.initialize());
    app.use(passport.session());


    passport.use(new LocalStrategy({
      usernameField: "username"
    }, async (username, password, done) => {
      
        let user = await User.findOne({
            where: { username }
        })

        if (!user || !authHelper.comparePass(password, user.password)) {
          return done(null, false, { message: "Invalid login credentials." });
        }
        
        return done(null, user);
    }));

    passport.serializeUser((user, callback) => {
      callback(null, user.id);
    });

    passport.deserializeUser(async (id, callback) => {
      try {
        let user = await User.findById(id)
        return callback(null, user);

      } catch(err) {
        return callback(err, user);
      }
    })
  }
}
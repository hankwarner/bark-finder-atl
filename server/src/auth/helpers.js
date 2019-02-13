const bcrypt = require("bcryptjs");

module.exports = {

  // ensureAuthenticated(req, res, next) {
  //   if (!req.user){
  //     req.flash("notice", "You must be signed in to do that.")
  //   } else {
  //     next();
  //   }
  // },

  comparePass(userPassword, databasePassword) {
    if (userPassword === null) {
      return done(null, false, { message: 'bad username' })

    } else {
      return bcrypt.compareSync(userPassword, databasePassword)
    }
  }

}
    
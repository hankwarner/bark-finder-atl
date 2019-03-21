const User = require('../models').User
const bcrypt = require("bcryptjs");

module.exports = {
    async createUser(newUser, callback) {
        try {
            const salt = bcrypt.genSaltSync();
            const hashedPassword = bcrypt.hashSync(newUser.password, salt);
            
            var user = await User.create({email: newUser.email, username: newUser.username, password: hashedPassword});
            return callback(null, user);

        } catch(err) {
            callback(err);
        }
    },

    async getUserById(userId, callback) {
        try {            
            var user = await User.findById(userId);
            return callback(null, user);

        } catch(err) {
            callback(err);
        }
    },

    async resetPassword(userIdAndNewPassword, callback) {
        var user = await User.findById(userIdAndNewPassword.id);
        //reset the password
    }
}
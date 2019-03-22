const User = require('../models').User;
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync();

module.exports = {
    async createUser(newUser, callback) {
        try {
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

    async getUserByUsername(username, callback) {
        try {            
            var user = await User.findOne({
                where: {
                    username: username
                }
            })
            return callback(null, user);

        } catch(err) {
            callback(err);
        }
    },

    async getUserByEmail(userEmail, callback) {
        try {            
            var user = await User.findOne({
                where: {
                    email: userEmail
                }
            })
            return callback(null, user);

        } catch(err) {
            callback(err);
        }
    },

    resetPassword(userIdAndNewPassword, callback) {
        const hashedPassword = bcrypt.hashSync(userIdAndNewPassword.password, salt);

        User.findById(userIdAndNewPassword.userId)
        .then(user => {
            user.update({password: hashedPassword});
            callback(null, user);
        })
        .catch(err => {
            console.log(err);
            callback(err);
        })
    }
}
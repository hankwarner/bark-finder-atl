const User = require('../models').User
const bcrypt = require("bcryptjs");

module.exports = {
    async createUser(newUser, callback) {
        
        try {
            const salt = bcrypt.genSaltSync();
            const hashedPassword = bcrypt.hashSync(newUser.password, salt);
            
            let user = await User.create({email: newUser.email, username: newUser.username, password: hashedPassword})
            return callback(null, user)

        } catch(err) {
            callback(err)
        }
    }
}
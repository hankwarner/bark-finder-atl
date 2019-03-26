require("dotenv").config()
require('newrelic')
const passportConfig = require("./passport-config")
const expressValidator = require("express-validator")


module.exports = {
    port: process.env.PORT || 8081,

    init(app) {

        passportConfig.init(app)

        app.use(expressValidator())
        
        app.use((req,res,next) => {
            res.locals.currentUser = req.user;

            // Allowing production URL to connect to db
            res.setHeader('Access-Control-Allow-Origin', 'https://barkfinderatl.netlify.com/');

            // Request methods to allow
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

            // Request headers to allow
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

            next();
        })
    }
}

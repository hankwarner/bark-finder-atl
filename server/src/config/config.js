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
            next()
        })

        app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        
    }
}

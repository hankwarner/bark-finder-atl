require("dotenv").config()
const passportConfig = require("./passport-config")


module.exports = {
    port: 8081,

    init(app) {

        passportConfig.init(app)

        app.use((req,res,next) => {
            res.locals.currentUser = req.user;
            next()
        })
    }
}

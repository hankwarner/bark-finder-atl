require("dotenv").config();
//const session = require("express-session");
const passportConfig = require("./passport-config");


module.exports = {
    port: 8081,

    init(app) {



        // app.use(session({
        //     secret: process.env.cookieSecret,
        //     resave: false,
        //     saveUninitialized: false,
        //     cookie: { maxAge: 1.21e+9 }
        // }))

        passportConfig.init(app)

        app.use((req,res,next) => {
            res.locals.currentUser = req.user;
            next()
        })
    }
}

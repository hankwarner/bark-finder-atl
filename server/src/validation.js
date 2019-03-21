module.exports = {
    validatePasswords(req, res, next) {
        if(req.method="POST") {
            req.checkBody("passwordConfirmation", "must match password provided").optional().matches(req.body.password);
        }

        var error = req.validationErrors();

        if(error) {
            return res.status(400).send(error[0].msg)
        } else {
            next();
        }
    }
}
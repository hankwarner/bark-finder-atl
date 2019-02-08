const Review = require('../models').Review

module.exports = {
    async createReview(newReview, callback){
        try {
            let review = await Review.create(newReview)
            return callback(null, review)

        } catch(err) {
            console.log(err)
            callback(err)
        }
        
    },

    async destroy(req, callback){
        try {
            //TODO: check if user is authorized

            //find the review by ID and then delete it from the db
            await Review.findById(req.params.id)
            Review.destroy()
            return callback(null)

        } catch(err) {
            console.log(err)
            callback(err)
        }
    }
}
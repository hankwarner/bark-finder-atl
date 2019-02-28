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

    async deleteReview(req, callback){
        try {
            //find the review by ID and then delete it from the db
            var review = await Review.findById(req.params.id)
            review.destroy()
            return callback(null)

        } catch(err) {
            console.log(err)
            callback(err)
        }
    }
}
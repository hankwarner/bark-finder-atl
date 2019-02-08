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
        
    }
}
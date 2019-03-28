const reviewQueries = require('../db/queries/reviewQueries')

module.exports = {
  create(req, res, next){
    var newReview = {
      body: req.body.body,
      rating: req.body.rating,
      userId: req.body.userId,
    }
    //determine the type of review
    if(req.body.parkId) {
      newReview.parkId = req.body.parkId;
    } else if (req.body.restaurantId) {
      newReview.restaurantId = req.body.restaurantId;
    } else if (req.body.eventId) {
      newReview.eventId = req.body.eventId;
    }

    reviewQueries.createReview(newReview, (err, review) => {
      if(err){
          console.log(err)
          //send error back to client
          res.status(400).send(err.message)
      } else {
          //send review object back to client
          res.send(review)
      }
    })
  },

  destroy(req, res, next){
    reviewQueries.deleteReview(req, (err) => {
      if(err){
        console.log(err)
        res.status(400).send(err.message)
      } else {
        res.status(200)
      }
    })
  }
}
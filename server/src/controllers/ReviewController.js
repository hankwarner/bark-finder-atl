const reviewQueries = require('../db/queries/reviewQueries')

module.exports = {
    create(req, res, next){
        // let token = req.body.token
        // if(!token) return res.status(401)
        
        let newReview = {
            body: req.body.body,
            rating: req.body.rating,
            userId: req.body.userId,
            parkId: req.body.parkId
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
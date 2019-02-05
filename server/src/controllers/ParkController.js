const parkQueries = require('../db/queries/parkQueries')

module.exports = {
    index(req, res, next){
        parkQueries.getAllParks((err, parks) => {
            if(err){
                console.log(err)
                //send error back to client
                res.status(400).send(err.message)
            } else {
                //send parks back to client
                res.send(parks)
            }
        })
    }
  }
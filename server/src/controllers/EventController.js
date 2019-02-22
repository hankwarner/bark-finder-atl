const eventQueries = require('../db/queries/eventQueries')

module.exports = {
    index(req, res, next){
        eventQueries.getAllEvents((err, events) => {
            if(err){
                console.log(err)
                //send error back to client
                res.status(400).send(err.message)
            } else {
                //send events object back to client
                res.send(events)
            }
        })
    },

    show(req, res, next) {
        eventQueries.getEvent(req.params.id, (err, event) => {
            if(err || event == null) {
                console.log(err)
                res.status(400).send(err.message)
            } else {
                res.send(event)
            }
        })
    }
  }
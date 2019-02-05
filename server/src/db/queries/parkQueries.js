const Park = require('../models').Park

module.exports = {

    async getAllParks(callback) {
        try {
            let parks = await Park.all()
            return callback(null, parks)
            
        } catch(error) {
            console.log(error)
            callback(error)
        }
    }
}
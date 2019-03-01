require('newrelic')
const express = require('express')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./db/models')
const config = require('./config/config')


const app = express()
app.use(express.static('public'))
app.use(favicon(__dirname + '/public/favicon-16x16.png'));
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
config.init(app, express)

require('./routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`server listening on port ${config.port}`)
  })

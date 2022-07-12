const express = require('express')
const cors = require('cors')

const app = express()

const index = require('./middleware')

const registerUser = require('./routes/routes')
const user = require('./routes/routes')
const users = require('./routes/routes')
const login = require('./routes/routes')
app.use(express.urlencoded({extended: false}))
app.use(express.json({type: 'application/vnd.api+json'}))
app.use(express.json())
app.use(cors())

app.use(index)

app.use('/user/', registerUser)
app.use('/user/', user)
app.use('/admin/', users)
app.use('/user/', login)

module.exports = app
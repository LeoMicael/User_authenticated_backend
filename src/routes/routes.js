const express = require('express')
const post = require('../model/user')

const routes = express.Router()

routes.post('/register/user', post.newUser)

module.exports = routes;
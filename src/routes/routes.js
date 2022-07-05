const express = require('express')
const post = require('../model/users/post')
const get = require('../model/users/get')

const routes = express.Router()

routes.post('/user/signup', post.newUser)

routes.get('/me/:id', get.getUser)

module.exports = routes;
const express = require('express')
const post = require('../model/users/post')
const get = require('../model/users/get')
const routes = express.Router()

// rota de cadastro 
routes.post('/signup', post.newUser)

// rotas de consultas
routes.get('/me/:id', get.getUserById)
routes.get('/users', get.getUser)

routes.get('/login', get.login)

module.exports = routes;
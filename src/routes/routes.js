const express = require('express')
const post = require('../model/users/post')
const get = require('../model/users/get')
const singIn = require('../model/auth/login')
const routes = express.Router()

// rota de cadastro 
routes.post('/signup', post.newUser)

// rotas de consultas
routes.get('/me/:id', get.getUserById)
routes.get('/users', get.getUser)

routes.post('/login', singIn.login)


module.exports = routes;
const express = require('express')
const post = require('../model/users/post')
const get = require('../model/users/get')
const login = require('../model/auth/login')
const routes = express.Router()

// rota de cadastro 
routes.post('/signup', post.newUser)

// rotas de consultas
routes.get('/me/:id', get.getUserById)
routes.get('/users', get.getUser)

routes.post('/login', post.login)
routes.post('/signin', login.login)


module.exports = routes;
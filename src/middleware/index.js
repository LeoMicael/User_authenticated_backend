const express = require('express')

const routes = express.Router()

// Middleware da api 
routes.get('/api/', (req, res, next) => {
    res.send({
       "title": "Authenticated api",
       "data": new Date()
    })
    next()
})
module.exports = routes;
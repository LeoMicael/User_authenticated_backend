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
// rota de cadastro do novo usuario www.avnpv/user/signup
app.use('/user/', registerUser)
// rota de acesso ao usuario pelo id www.nidasdano/user/me/:id
app.use('/user/', user)
// rota Administrativa que seleciona todos os usuarios cadastrados www.dacniod/admin/users
app.use('/admin/', users)
// rota de login do usuario www.uscaicb/user/login
app.use('/user/', login)

module.exports = app
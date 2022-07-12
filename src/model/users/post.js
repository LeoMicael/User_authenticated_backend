const db = require('../../config/database')
const bcrypt = require('bcrypt')

exports.newUser = async (req, res) => {
    const users = {
        user_name,
        user_email,
        user_password,
        create_at
    } = req.body
    // check se os campos do formularios estão devidamente preenchidos.
    // check if all the form fields are complet
    if (!user_name) {
        res.status(404).send({ mensagem: "O Campo Nome é Obrigatório" })
        return
    }
    if (!user_email) {
        res.status(404).send({ mensagem: "O campo Email é obrigatorio" })
        return
    }
    if (!user_password) {
        res.status(404).send({ mensagem: "O campo Password é obrigatório" })
        return
    }
    // senha criptografada
    const hash_password = await bcrypt.hash(user_password, 10)

    const existEmail = await db.query('SELECT * FROM users WHERE user_email = $1', [user_email])
    if (existEmail.rows.length > 0) {
        return res.status(401).send({ mensagem: "Cadastro não autorizado" })
    }
    const { rows } = await db.query('INSERT INTO users (user_name, user_email, user_password, create_at) VALUES ($1, $2, $3, $4)',
        [
            user_name,
            user_email,
            hash_password,
            create_at,
        ])
    res.status(201).send({
        messagem: "Usuario criado com sucesso"
    })
}

exports.login = async (req, res) => {
    const { user_email, user_password } = req.body
    const verifyUser = await db.query('SELECT * FROM users WHERE user_email = $1', [user_email])
    if (!verifyUser) {
        res.status(404).send({ mensagem: "Email nao encontrado" })
    } else {
        res.status(200).send({user_name: verifyUser.rows})
    }
    console.log(verifyUser)
}

/*
if (!verifyUser) {
    return res.status(404).send({mensagem: "Email não encontrado!"})
}

*/




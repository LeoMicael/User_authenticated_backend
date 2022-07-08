const db = require('../../config/database')
const bcrypt = require('bcrypt')
exports.newUser = async (req, res) => {
    const {

        user_name,
        user_email,
        user_password,
        create_at

    } = req.body
    // check se os campos do formularios estão devidamente preenchidos.
    // check if all the form fields are complet
    if (!user_name) {
        res.status(404).send({ mesagem: "O Campo Nome é Obrigatório" })
        return
    }

    if (!user_email) {
        res.status(404).send({ mesagem: "O campo Email é obrigatorio" })
        return
    }
    if (!user_password) {
        res.status(404).send({ mesagem: "O campo Password é obrigatório" })
        return
    }
    // senha criptografada
    const hash_passord = await bcrypt.hash(user_password, 10)

    const { rows } = await db.query('INSERT INTO users (user_name, user_email, user_password, create_at) VALUES ($1, $2, $3, $4)',
        [
            user_name,
            user_email,
            hash_passord,
            create_at,
        ])
    res.status(201).send({
        messagem: "Usuario criado com sucesso"
    })

}
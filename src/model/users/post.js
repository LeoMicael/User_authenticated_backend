const db = require('../../config/database')

exports.newUser = async (req, res) => {
    const {
        
        user_name,
        user_email,
        user_password,
        create_at

    } = req.body
    /*
    if (!user_name) {
        return(
        res.status(404).send({mesagem: "Todos os campos são obrigatótios"})
    )}
    if (!user_email) {
        return(
        res.status(404).send({mesagem: "Todos os campos são obrigatótios"})
    )}
    if (!user_password) {
        return(
        res.status(404).send({mesagem: "Todos os campos são obrigatótios"})
    )}
    */
    const {rows} = await db.query('INSERT INTO users (user_name, user_email, user_password, create_at) VALUES ($1, $2, $3, $4)', 
    [
        user_name,
        user_email,
        user_password,
        create_at

    ])
    res.status(201).send({
        messagem: "Usuario criado com sucesso"
    })
    
}
const db = require('../../config/database')
exports.login = async(req, res) => {
    const {
        user_email,
        user_password
    } = req.body
    const email = await db.query('SELECT * FROM users WHERE user_email = $1', 
        [user_email]
    );
    if (email.rowCount <= 0) {
        res.status(404).send({ mensagem: "Email nao encontrado" })
        return
    } res.end()
    console.log(email.rows[0])
     
}




/*
authenticação e authorização
authenticação ==> verifica a existencia do usuario no banco de dados e certifica a senha de acesso
*/

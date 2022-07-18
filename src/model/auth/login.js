const db = require('../../config/database')
const bcrypt = require(`bcrypt`)
exports.login = async(req, res) => {
    const {
        user_email,
        user_password
    } = req.body
    const email = await db.query('SELECT * FROM users WHERE user_email = $1', 
        [user_email]
    );
    console.log(email.rows)
    if (email.rowCount <= 0) {
        res.status(404).send({ mensagem: "Email nao encontrado" })
        return
    } {
        
        userId = email.rows.map(obj => obj.user_id)
        userName = email.rows.map(obj => obj.user_name)
        userName = userName.toString(userName)
        userpassword = email.rows.map(obj => obj.user_password)
        userpassword = userpassword.toString(userpassword)
        const Match = bcrypt.compareSync(user_password, userpassword );
    if (!Match) {
        return res.status(422).send({mensagem: "Email ou senha invalidos"})
        } 
        return res.status(200).send({userId, userName})
    }
     
}




/*
authenticação e authorização
authenticação ==> verifica a existencia do usuario no banco de dados e certifica a senha de acesso
*/

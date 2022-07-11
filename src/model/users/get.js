const db = require('../../config/database')

exports.getUserById = async (req, res) => {
    const idUser = req.params.id
    const response = await db.query('SELECT * FROM users WHERE user_id = $1', [idUser])
    res.status(200).send (response.rows)
}
 
exports.getUser = async (req, res) => {
    const response = await db.query('SELECT * FROM users ORDER BY user_id ASC')
    res.status(200).send(response.rows)
}

exports.login = async (req, res) => {
    const {user_email, user_password} = req.body
    const verrifyUser = db.query('SELECT * FROM users WHERE (user_email, user_password) VALUES = $1, $2', [user_email, user_password])
    console.log(verrifyUser.rows)
} 
const db = require('../../config/database')

exports.getUser = async (req, res) => {
    const idUser = req.params.id
    const response = await db.query('SELECT * FROM users WHERE user_id = $1', [idUser])
    res.status(200).send (response.rows)
}
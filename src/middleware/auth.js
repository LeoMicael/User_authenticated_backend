const db = require('../config/database')

exports.getExistEmail = async (req, res) => {
    const user_email = req.body 
    const existEmail = await db.query('SELECT * FROM users WHERE user_email = $1', [user_email])
    if (existEmail > 0) {
        res.status(401).send({message: 'Já cadastrado!'})
    }
}
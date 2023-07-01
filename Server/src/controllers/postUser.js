const {User} = require('../DB_connection');

const postUser = async (req, res) => {
    const {email, password} = req.body;
    if (!email || !password) {
        return res.status(400).json({message: "Faltan datos"});
    }
    try {
        const response = await User.findOrCreate({where: {email, password}});
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({error: error.message});
    };
}

module.exports = postUser;
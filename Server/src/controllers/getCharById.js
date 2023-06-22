const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById (req, res) {
    try {
        const {id} = req.params;
        const response = await axios.get(URL + id);
            if (response.data) {
                const {id, status, name, species, origin, image, gender} = response.data;
                const character = {
                    id: id,
                    status: status,
                    name: name,
                    species: species,
                    origin: origin,
                    image: image,
                    gender: gender,
                };
    
                res.status(200).json(character);
            }
            else {
                res.status(404).send('Not found');
            }
    }
    catch (error) {
        res.status(500).json({message: error.message});
    };
};

module.exports = getCharById;
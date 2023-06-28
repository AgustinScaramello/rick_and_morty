const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(`${URL}/${id}`);
    const { status, name, species, origin, image, gender } = data;
    const character = { id, status, name, species, origin, image, gender };
    if (name) {
      return res.json(character);
    } else {
      return res.status(404).json("Not found");
    }
  } catch (reason) {
    return res.status(500).json({ message: reason });
  }
};

module.exports = getCharById;

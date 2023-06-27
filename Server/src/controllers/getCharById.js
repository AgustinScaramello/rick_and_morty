const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = (req, res) => {
  const { id } = req.params;

  axios(`${URL}/${id}`)
    .then(({ data }) => {
      const { id, status, name, species, origin, image, gender, error } = data;
      const character = { id, status, name, species, origin, image, gender };

      if (name) {
        return res.json(character);
      } else {
        return res.status(404).json("Not found");
      }
    })
    .catch((reason) => {
      return res.status(500).json(reason.message);
    });
};

module.exports = getCharById;

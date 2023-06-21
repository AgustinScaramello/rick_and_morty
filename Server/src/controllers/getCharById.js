const axios = require("axios");

const getCharById = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      const {
        name,
        gender,
        species,
        origin = origin.name,
        image,
        status,
      } = data;
      const character = {
        id,
        name,
        gender,
        species,
        origin,
        image,
        status,
      };

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character));
    })
    .catch((reason) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(reason.message);
    });
};

module.exports = getCharById;

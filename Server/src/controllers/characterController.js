require("dotenv").config();
const { URL_API } = process.env;
const axios = require("axios");

const findCharById = async (id) => {
  const { data } = await axios(`${URL_API}/${id}`);
  const { status, name, species, origin, image, gender } = data;
  const character = { id, status, name, species, origin, image, gender };

  return character;
};

module.exports = findCharById;

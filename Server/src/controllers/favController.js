const { Favorite } = require("../db");

//--------------------------------------------------------

const allFav = async () => {
  return await Favorite.findAll();
};

//--------------------------------------------------------

const destroyFav = async (id) => {
  return await Favorite.destroy({ where: { id } });
};

//--------------------------------------------------------

const createFav = async (char) => {
  return await Favorite.findOrCreate({
    where: char,
  });
};

//--------------------------------------------------------

module.exports = {
  allFav,
  destroyFav,
  createFav,
};

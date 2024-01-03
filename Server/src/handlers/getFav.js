const { allFav } = require("../controllers/favController");

const getFav = async (req, res) => {
  try {
    const favs = await allFav();

    if (favs.length > 0) {
      return res.status(200).json(favs);
    } else {
      return res.status(400).json({ error: "No tienes personajes favoritos" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getFav;

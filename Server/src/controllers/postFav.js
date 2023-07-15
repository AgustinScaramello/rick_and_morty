const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { name, origin, status, image, species, gender } = req.body;

  if (!name || !origin || !status || !image || !species || !gender) {
    return res.status(401).json({ error: "Faltan datos" });
  }

  try {
    await Favorite.findOrCreate({
      where: { name, origin, status, image, species, gender },
    });

    const favorites = await Favorite.findAll();

    return res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;

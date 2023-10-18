const { allFav, createFav } = require("../controllers/favController");

const postFav = async (req, res) => {
  const { name, origin, status, image, species, gender } = req.body;

  if (!name || !origin || !status || !image || !species || !gender) {
    return res.status(401).json({ error: "Faltan datos" });
  }

  const char = { name, origin, status, image, species, gender };

  try {
    await createFav(char);

    const favorites = allFav();

    return res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;

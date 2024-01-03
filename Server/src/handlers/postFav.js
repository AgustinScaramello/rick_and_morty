const { createFav } = require("../controllers/favController");

const postFav = async (req, res) => {
  const { id, name, origin, status, image, species, gender } = req.body;

  if (!id || !name || !origin || !status || !image || !species || !gender) {
    return res.status(401).json({ error: "Faltan datos" });
  }

  const char = {
    id,
    name,
    origin: origin.name,
    status,
    image,
    species,
    gender,
  };

  try {
    const newFav = await createFav(char);

    return res.status(200).json(newFav);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;

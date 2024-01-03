const { destroyFav } = require("../controllers/favController");

const deleteFav = async (req, res) => {
  const { id } = req.params;

  try {
    const newDelete = await destroyFav(id);

    if (newDelete > 0) {
      return res
        .status(200)
        .json({ message: "Personaje quitado de favoritos" });
    } else {
      return res
        .status(400)
        .json({ error: "El personaje no es parte de tus favoritos" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteFav;

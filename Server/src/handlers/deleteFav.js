const { allFav, destroyFav } = require("../controllers/favController");

const deleteFav = async (req, res) => {
  const { id } = req.params;

  try {
    await destroyFav(id);

    const favorites = await allFav();

    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteFav;

const findCharById = require("../controllers/characterController");

const getCharById = async (req, res) => {
  const { id } = req.params;

  try {
    const character = await findCharById(id);

    if (character) {
      return res.json(character);
    } else {
      return res.status(404).json("Not found");
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = getCharById;

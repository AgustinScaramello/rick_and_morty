const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  const { email, password } = req.query;
  if (!email || !password) {
    return res.status(400).json({ error: "Faltan datos" });
  }

  try {
    const user = await User.findOrCreate({ where: { email, password } });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = postUser;

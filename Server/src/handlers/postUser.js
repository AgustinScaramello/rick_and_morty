const { User } = require("../DB_connection");
const { createUser } = require("../controllers/userController");

const postUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Faltan datos" });
  }

  const newUser = { email, password };

  try {
    await createUser(newUser);
    res.status(200).json({ message: "Usuario creado con éxito" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = postUser;

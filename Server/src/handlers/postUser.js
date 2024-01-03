const { createUser, findUser } = require("../controllers/userController");

const postUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Faltan datos" });
  }

  const existUser = await findUser(email);

  const newUser = { email, password };

  try {
    if (existUser) {
      return res.status(400).json({ message: "El usuario ya existe" });
    } else {
      await createUser(newUser);
      res.status(200).json({ message: "Usuario creado con éxito" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = postUser;

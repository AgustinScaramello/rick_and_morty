const { findUser } = require("../controllers/userController");

const login = async (req, res) => {
  const { email, password } = req.query;

  if (!email || !password) {
    return res.status(400).json({ error: "Faltan datos" });
  }

  try {
    const user = await findUser(email);

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    if (user && user.password === password) {
      return res.status(200).json(true);
    } else {
      return res.status(403).json({ error: "Contraseña incorrecta" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = login;

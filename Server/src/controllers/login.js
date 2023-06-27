const user = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;
  if (
    user.find(
      (usuario) => usuario.email === email && usuario.password === password
    )
  ) {
    return res.status(200).json({ access: true });
  } else {
    return res.status(200).json({ access: false });
  }
};

module.exports = login;

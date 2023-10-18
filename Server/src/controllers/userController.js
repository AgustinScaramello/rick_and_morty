const { User } = require("../DB_connection");

//--------------------------------------------------------

const findUser = async (email) => {
  const user = await User.findOne({ where: { email } });

  return user;
};

//--------------------------------------------------------

const createUser = async (user) => {
  await User.findOrCreate({ where: user });
};

//--------------------------------------------------------

module.exports = { findUser, createUser };

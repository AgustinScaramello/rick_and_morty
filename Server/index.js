require("dotenv").config();
const server = require("./src/app");
const { conn } = require("./src/db");
const { PORT } = process.env;

server.listen(PORT, async () => {
  await conn.sync({ force: true });
  console.log("Server raised in port: " + PORT);
});

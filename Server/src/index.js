require("dotenv").config();
const server = require("./app");
const { conn } = require("./DB_connection");
const { PORT } = process.env;

server.listen(PORT, async () => {
  await conn.sync({ force: true });
  console.log("Server raised in port: " + PORT);
});

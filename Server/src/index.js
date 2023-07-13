const server = require("./app");
const { conn } = require("./DB_connection");
const PORT = 3001;

conn
  .sync({ force: true })
  .then(() => {
    console.log("Sincronización completada");
  })
  .catch((error) => {
    console.error("Error en la sincronización:", error);
  });

server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});

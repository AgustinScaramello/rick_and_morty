const data = require("./utils/data");
const http = require("http");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (req.url.includes("/rickandmorty/character")) {
      const id = req.url.split("/").at(-1);
      const personaje = data.find((character) => character.id === Number(id));

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(personaje));
    }
  })
  .listen(3001, "localhost", null);

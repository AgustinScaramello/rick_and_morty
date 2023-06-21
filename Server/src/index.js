const http = require("http");
const getCharById = require("./controllers/getCharById");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (req.url.includes("/rickandmorty/character")) {
      const id = Number(req.url.split("/").at(-1));
      getCharById(res, id);
    } else {
      res.writeHead(403, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Route not found" }));
    }
  })
  .listen(3001, "localhost", null);

const router = require("express").Router();
const getCharById = require("../handlers/getCharById");
const deleteFav = require("../handlers/deleteFav");
const login = require("../handlers/login");
const postFav = require("../handlers/postFav");
const postUser = require("../handlers/postUser");

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/login", postUser);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;

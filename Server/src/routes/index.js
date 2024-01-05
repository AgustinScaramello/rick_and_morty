const router = require("express").Router();
const getCharById = require("../handlers/getCharById");
const deleteFav = require("../handlers/deleteFav");
const login = require("../handlers/login");
const getFav = require("../handlers/getFav");
const postFav = require("../handlers/postFav");
const postUser = require("../handlers/postUser");

router.get("/character/:id", getCharById); //ok
router.get("/login", login); //ok
router.post("/register", postUser); //ok
router.get("/fav", getFav); //ok
router.post("/fav", postFav); //ok
router.delete("/fav/:id", deleteFav); //ok

module.exports = router;

const express = require('express');
const router = express.Router();

const postUser = require('../controllers/postUser');
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');
const login = require('../controllers/login');
const getCharById = require('../controllers/getCharById');

router.get("/login", login);
router.get("/character/:id", getCharById);
router.post("/login", postUser);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
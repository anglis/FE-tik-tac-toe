const express = require("express");
const { createMatch } = require("../../controllers/match");

const router = express.Router();

router.post("/new", createMatch);

module.exports = {
  matchRoutes: router,
};

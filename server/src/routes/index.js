const express = require("express");
const { matchRoutes } = require("./match");

const router = express.Router();

router.use("/match", matchRoutes);

module.exports = {
  routes: router,
};

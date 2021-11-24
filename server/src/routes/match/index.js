const express = require("express");
const {
  createMatch,
  getByUuid,
  addMove,
  getAllMoves,
} = require("../../controllers/match");

const router = express.Router();

router.post("/new", createMatch);
router.get("/getByUuid/:uuid", getByUuid);
router.post("/:id/addMove", addMove);
router.get("/:id/moves", getAllMoves);

module.exports = {
  matchRoutes: router,
};

const { Match, Move } = require("../models");

const createMatch = async (req, res) => {
  const uuid = req.body.uuid;

  const match = await Match.create({
    uuid,
  });

  res.send({ id: match.id });
};

const getByUuid = async (req, res) => {
  const uuid = req.params.uuid;

  const match = await Match.findOne({
    where: {
      uuid,
    },
  });

  res.send(match);
};

const addMove = async (req, res) => {
  const id = req.params.id;

  const move = await Move.create({
    ...req.body,
    matchId: id,
  });

  res.send(move);
};

const getAllMoves = async (req, res) => {
  const id = req.params.id;

  const moves = await Move.findAll({
    where: {
      matchId: id,
    },
    order: [["order", "ASC"]],
  });

  res.send(moves);
};

module.exports = {
  createMatch,
  getByUuid,
  addMove,
  getAllMoves,
};

const { sequelize } = require("../middleware");
const { DataTypes } = require("sequelize/dist");
const Match = require("./Match");
const Move = require("./Move");

const MatchModel = Match(sequelize, DataTypes);
const MoveModel = Move(sequelize, DataTypes);

module.exports = {
  Match: MatchModel,
  Move: MoveModel,
};

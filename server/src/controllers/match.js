const { Match } = require("../models");

const createMatch = async (req, res) => {
  const uuid = req.body.uuid;

  const match = await Match.create({
    uuid,
  });

  res.send({ id: match.id });
};

module.exports = {
  createMatch,
};

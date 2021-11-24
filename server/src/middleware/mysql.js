const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "mysql_db",
  database: "ticTacToe",
  port: 3306,
  username: "ticTacToe_USER",
  password: "ticTacToe_PASSWORD",
});

module.exports = { sequelize };

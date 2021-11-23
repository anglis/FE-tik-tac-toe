const mysql = require("mysql2");

const db = mysql.createPool({
  host: "mysql_db", // the host name MYSQL_DATABASE: node_mysql
  user: "ticTacToe_USER", // database user MYSQL_USER: MYSQL_USER
  password: "ticTacToe_PASSWORD", // database user password MYSQL_PASSWORD: MYSQL_PASSWORD
  database: "ticTacToe", // database name MYSQL_HOST_IP: mysql_db
});

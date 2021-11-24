const express = require("express");
const cors = require("cors");
require("./middleware");
const { routes } = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3001, () => {
  console.log(`Example app listening at http://localhost:${3001}`);
});

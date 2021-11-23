const express = require("express");
// const cors = require("cors");

const port = 3001;
const app = express();

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hi There");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

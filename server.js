const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hi, Welcome to Easy Park");
});

app.listen(3003, () => {
  console.log("Running server");
});

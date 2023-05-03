const express = require("express");
var cors = require("cors");

const chefs = require("./chefs.json");
const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("chef cooking food now");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});
app.get("/chefs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const chef = chefs.find((chef) => chef.id === id) || {};
  res.send(chef);
});

app.listen(port, () => {
  console.log(`chef server port: ${port}`);
});

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.get("/route-handler", function (req, res) {
  res.json({
    name: "Aditya",
    age: 20,
  });
});
app.get("/", function (req, res) {
  console.log(req.body);
  res.send("Atharv Chutiya");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});

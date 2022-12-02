//jshint esversion:6

const connectToMongo = require("./db");
const express = require("express");
var cors = require('cors');

// const bodyParser = require('body-parser');


connectToMongo();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json())
// app.use(bodyParser.urlencoded({extended: true}));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));


app.get("/", function (req, res) {
  res.send("Hello Harry");
});

app.listen(port, function () {
  console.log(`iNotebook app listening at http://localhost:${port}`);
});

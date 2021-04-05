require("./db");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

var users = require("./controllers/usersController");

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.listen(4000, () => console.log("Server started at : 4000"));

app.use("/users", users);

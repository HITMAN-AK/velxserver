const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
app.listen(108, "0.0.0.0", () => console.log("server is on port 108"));

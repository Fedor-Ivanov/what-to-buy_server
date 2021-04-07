const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Lists = require("./models/List");
const cors = require("cors");

require("dotenv/config");

app.use(cors());
app.use(bodyParser.json());

const listsRoute = require("./routes/lists");

app.use("/lists", listsRoute);

mongoose.connect(
	process.env.DB_CONNECTION_URL,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => console.log("connected to db")
);

app.listen(5000);

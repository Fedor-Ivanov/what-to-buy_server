const mongoose = require("mongoose");

const list = mongoose.Schema(
	{
		title: String,
	},
	{
		collection: "lists",
	}
);

module.exports = mongoose.model("Lists", list);

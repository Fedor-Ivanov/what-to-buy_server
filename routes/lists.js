const express = require("express");
const router = express.Router();
const Lists = require("../models/List");

router.get("/", async (req, res) => {
	try {
		const lists = await Lists.find();
		res.json(lists);
		// res.send(lists);
	} catch (error) {
		console.error(error);
	}
});

router.post("/", (req, res) => {
	res.send("Hello data");
});

module.exports = router;

const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    res.json(response.data);
  } catch (err) {
    res.status(404).json({ error: "Pokemon not found" });
  }
});

module.exports = router;

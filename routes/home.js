const path = require("path");

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "index.html"));
});

router.get("/hello", (req, res) => {
  res.send("<h1>Hello</h1>");
});

module.exports = router;

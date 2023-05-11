const path = require("path");

const express = require("express");
const router = express.Router();

const rootDir = require("../utils/path");

router.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "index.html"));
});

router.get("/hello", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "hello.html"));
});

module.exports = router;

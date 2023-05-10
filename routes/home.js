const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(
    "<form method='POST' action='/password'><input type='text' name='password'/><input type='submit'/></form>"
  );
});

router.get("/hello", (req, res) => {
  res.send("<h1>Hello</h1>");
});

module.exports = router;

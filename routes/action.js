const fs = require("fs");

const express = require("express");
const router = express.Router();

router.post("/password", (req, res) => {
  fs.writeFile("password.txt", req.body.password, (err) => {
    console.log(err);
    res.redirect("/");
  });
});

module.exports = router;

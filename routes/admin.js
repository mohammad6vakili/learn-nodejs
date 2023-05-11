const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

router.post("/add-todo", adminController.addTodo);

module.exports = router;

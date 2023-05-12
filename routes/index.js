const express = require("express");
const router = express.Router();

const todosController = require("../controllers/todos");

router.get("/", todosController.getIndex);

module.exports = router;

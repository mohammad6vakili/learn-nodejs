const Todo = require("../models/todo");

exports.getIndex = (req, res) => {
  Todo.fetchTodos((todos) => {
    res.render("index", {
      pageTitle: "مدیریت کارها",
      todos,
    });
  });
};

const Todo = require("../models/todo");
const todoUtils = require("../utils/todos");

exports.getIndex = (req, res) => {
  todoUtils.getCompletedTodos((completedTodos) => {
    todoUtils.getRemainingTodos((remainingTodos) => {
      Todo.fetchTodos((todos) => {
        res.render("index", {
          pageTitle: "مدیریت کارها",
          todos,
          completedTodos,
          remainingTodos,
        });
      });
    });
  });
};

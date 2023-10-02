const Todo = require("../models/todo");
// const todoUtils = require("../utils/todos");

exports.getIndex = async (req, res) => {
  // todoUtils.getCompletedTodos((completedTodos) => {
  //   todoUtils.getRemainingTodos((remainingTodos) => {
  //     Todo.fetchTodos((todos) => {
  //       res.render("index", {
  //         pageTitle: "مدیریت کارها",
  //         todos,
  //         completedTodos,
  //         remainingTodos,
  //       });
  //     });
  //   });
  // });

  const todos = await Todo.findAll();
  const completedTodos = await Todo.count({ where: { completed: true } });
  res.render("index", {
    pageTitle: "مدیریت کارها",
    todos,
    completedTodos,
    remainingTodos: todos.length - completedTodos,
  });
};

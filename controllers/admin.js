const Todo = require("../models/todo");
const todoUtils = require("../utils/todos");

exports.addTodo = (req, res) => {
  if (!req.body.todo) {
    return res.redirect("/");
  }
  const todo = new Todo(todoUtils.generateRandomId(), req?.body?.todo);
  todo.save((err) => {
    if (!err) {
      res.redirect("/");
    } else {
      console.log(err);
    }
  });
};

exports.deleteTodo = (req, res) => {
  Todo.deleteTodo(req.params.id, (err) => {
    if (!err) {
      res.redirect("/");
    } else {
      console.log(err);
    }
  });
};

exports.completeTodo = (req, res) => {
  Todo.completeTodo(req.params.id, (err) => {
    if (!err) {
      res.redirect("/");
    } else {
      console.log(err);
    }
  });
};

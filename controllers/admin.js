const Todo = require("../models/todo");

exports.addTodo = async (req, res) => {
  if (!req.body.todo) {
    return res.redirect("/");
  }
  try {
    await Todo.create({ text: req.body.todo });
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await Todo.destroy({ where: { id: req.params.id } });
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

exports.completeTodo = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    todo.completed = true;
    await todo.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

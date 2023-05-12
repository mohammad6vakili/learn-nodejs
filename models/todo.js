const fs = require("fs");
const path = require("path");

const rootDir = require("../utils/path");
const filePath = path.join(rootDir, "data", "todos.json");

const todoUtils = require("../utils/todos");

class Todo {
  constructor(id, text, completed = false) {
    this.id = id;
    this.text = text;
    this.completed = completed;
  }

  save(callback) {
    todoUtils.getTodos((todos) => {
      todos.push(this);
      todoUtils.saveTodos(todos, (err) => {
        callback(err);
      });
    });
  }

  static fetchTodos(callback) {
    todoUtils.getTodos((todos) => {
      callback(todos);
    });
  }

  static deleteTodo(id, callback) {
    todoUtils.getTodos((todos) => {
      const filteredTodos = todos.filter((todo) => todo.id != id);
      todoUtils.saveTodos(filteredTodos, (err) => {
        callback(err);
      });
    });
  }

  static completeTodo(id, callback) {
    todoUtils.getTodos((todos) => {
      let todoIndex = todos.findIndex((todo) => todo.id == id);
      todos[todoIndex].completed = true;
      todoUtils.saveTodos(todos, (err) => {
        callback(err);
      });
    });
  }
}

module.exports = Todo;

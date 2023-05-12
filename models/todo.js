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
    fs.readFile(filePath, (err, data) => {
      if (err) return [];
      const todos = JSON.parse(data);
      callback(todos);
    });
  }

  static deleteTodo(id, callback) {
    fs.readFile(filePath, (err, data) => {
      const todos = JSON.parse(data);
      const filteredTodos = todos.filter((todo) => todo.id != id);
      fs.writeFile(filePath, JSON.stringify(filteredTodos), (err) => {
        callback(err);
      });
    });
  }

  static completeTodo(id, callback) {
    fs.readFile(filePath, (err, data) => {
      const todos = JSON.parse(data);
      let todoIndex = todos.findIndex((todo) => todo.id == id);
      todos[todoIndex].completed = true;
      fs.writeFile(filePath, JSON.stringify(todos), (err) => {
        callback(err);
      });
    });
  }
}

module.exports = Todo;

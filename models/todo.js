const fs = require("fs");
const path = require("path");

const rootDir = require("../utils/path");
const filePath = path.join(rootDir, "data", "todos.json");

class Todo {
  constructor(id, text, completed = false) {
    this.id = id;
    this.text = text;
    this.completed = completed;
  }

  save(callback) {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        return [];
      }
      let todos = JSON.parse(data);
      todos.push(this);
      fs.writeFile(filePath, JSON.stringify(todos), (err) => {
        if (err) {
          callback(err);
        } else {
          return callback(null);
        }
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
}

module.exports = Todo;

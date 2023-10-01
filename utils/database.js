const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("todo_db", "root", "M9390624049m", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;

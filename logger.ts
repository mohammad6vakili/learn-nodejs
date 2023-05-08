const chalk = require("chalk");

const sayHello = (name) => {
  console.log(`Hello ${chalk.blue(name)}`);
};

module.exports = {
  sayHello,
};

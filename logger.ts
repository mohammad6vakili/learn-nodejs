const chalk = require("chalk");

const sayHello = (name: string) => {
  console.log(`Hello ${chalk.blue(name)}`);
};

module.exports = {
  sayHello,
};

const fs = require("fs");
const chalk = require("chalk");

const addUser = (name, mobile, email) => {
  const users = loadUsers();
  isUserExist = users.find((user) => user.name === name);
  if (isUserExist) {
    console.log(chalk.red("User Already Exist!"));
  } else {
    users.push({
      name,
      mobile,
      email,
    });
    saveUsers(users);
  }
};

const listUsers = () => {
  const users = loadUsers();
  if (users.length === 0) {
    console.log(chalk.red("There is no User!"));
  } else {
    console.table(users);
  }
};

const removeUser = (name) => {
  let users = loadUsers();
  isUserExist = users.find((user) => user.name === name);
  if (!isUserExist) {
    console.log(chalk.red("User doesn't exist!"));
  } else {
    let filteredUsers = users.filter((user) => user.name !== name);
    saveUsers(filteredUsers);
  }
};

const loadUsers = () => {
  try {
    const users = JSON.parse(fs.readFileSync("users.json").toString());
    return users;
  } catch (err) {
    console.log("contacts load error", err);
    return [];
  }
};

const saveUsers = (users) => {
  fs.writeFile("users.json", JSON.stringify(users), (err) => {
    console.log(chalk.green("User Saved Successfully!"));
  });
};

module.exports = {
  addUser,
  listUsers,
  removeUser,
};

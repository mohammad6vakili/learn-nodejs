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
};

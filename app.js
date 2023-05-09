const yargs = require("yargs");
const { addUser, listUsers } = require("./users");

yargs.command({
  command: "create",
  aliases: ["c"],
  describe: "create new user",
  builder: {
    name: {
      describe: "user name",
      demandOption: true,
      type: "string",
      alias: "n",
    },
    mobile: {
      describe: "user mobile",
      demandOption: true,
      type: "number",
      alias: "m",
    },
    email: {
      describe: "user email",
      demandOption: true,
      type: "string",
      alias: "e",
    },
  },
  handler: ({ name, mobile, email }) => {
    addUser(name, mobile, email);
  },
});

yargs.command({
  command: "list",
  aliases: ["l"],
  describe: "list users",
  handler: () => {
    listUsers();
  },
});

yargs.parse();

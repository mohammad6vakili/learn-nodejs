const yargs = require("yargs");
const { addUser } = require("./users");

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

yargs.parse();

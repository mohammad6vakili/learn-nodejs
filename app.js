const yargs = require("yargs");

yargs.command({
  command: "create",
  describe: "create new user",
  builder: {
    fullName: {
      describe: "user fullname",
      demandOption: true,
      type: "string",
    },
    mobile: {
      describe: "user mobile",
      demandOption: true,
      type: "number",
    },
    email: {
      describe: "user email",
      demandOption: true,
      type: "string",
    },
  },
  handler: ({ fullName, mobile, email }) => {
    console.log(fullName, mobile, email);
  },
});

yargs.parse();

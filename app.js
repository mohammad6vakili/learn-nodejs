// terminal app --------------------------------------------
// const yargs = require("yargs");
// const { addUser, listUsers, removeUser } = require("./users");

// yargs.command({
//   command: "create",
//   aliases: ["c"],
//   describe: "create new user",
//   builder: {
//     name: {
//       describe: "user name",
//       demandOption: true,
//       type: "string",
//       alias: "n",
//     },
//     mobile: {
//       describe: "user mobile",
//       demandOption: true,
//       type: "number",
//       alias: "m",
//     },
//     email: {
//       describe: "user email",
//       demandOption: true,
//       type: "string",
//       alias: "e",
//     },
//   },
//   handler: ({ name, mobile, email }) => {
//     addUser(name, mobile, email);
//   },
// });

// yargs.command({
//   command: "list",
//   aliases: ["l"],
//   describe: "list users",
//   handler: () => {
//     listUsers();
//   },
// });

// yargs.command({
//   command: "remove",
//   aliases: ["r"],
//   describe: "remove user from users list",
//   builder: {
//     name: {
//       describe: "user name",
//       demandOption: true,
//       type: "string",
//       alias: "n",
//     },
//   },
//   handler: ({ name }) => {
//     removeUser(name);
//   },
// });

// yargs.parse();

// events ----------------------------------------------------
// const { EventEmitter } = require("events");

// const ev = new EventEmitter();

// ev.addListener("sayHi", (data) => {
//   console.log("sayHi: ", data);
// });

// ev.addListener("userData", (data) => {
//   console.log("user data: ", data);
// });

// ev.addListener("sayBye", (data) => {
//   console.log("sayBye: ", data);
// });

// ev.emit("sayHi", "Hi");
// ev.emit("userData", { name: "Mohammad", mobile: "09390624049" });
// ev.emit("sayBye", "Bye");

// http ------------------------------------------------------
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let { url, method, headers } = req;
  console.log(`url: ${url}`);
  console.log(`method: ${method}`);
  console.log(`headers: ${headers}`);
  res.write(
    "<html><head><title>First Node Project</title></head><body><h1>hello world!</h1></body></html>"
  );
  res.end();
});

server.listen(3000);

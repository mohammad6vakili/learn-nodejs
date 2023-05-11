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
// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   let { url, method, headers } = req;

//   if (url === "/login") {
//     let bodyData = [];
//     res.statusCode = 302;
//     res.setHeader("Location", "/");
//     req.on("data", (chunk) => {
//       bodyData.push(chunk);
//     });
//     req.on("end", () => {
//       const parsedBody = Buffer.concat(bodyData).toString();
//       let password = parsedBody.split("=")[1];
//       fs.writeFileSync("password.txt", password);
//     });
//   } else if (url === "/") {
//     res.write("<html><head><title>Login</title></head><body><h1>Login</h1>");
//     res.write(
//       "<form method='POST' action='/login'><input name='password' type='text'/><input type='submit'/></form>"
//     );
//     res.write("</body></html>");
//   } else {
//     res.write(
//       "<html><head><title>Not Found</title></head><body><h1>Not Found</h1></body></html>"
//     );
//   }
//   res.end();
// });

// server.listen(3000);

// express ------------------------------------------------------

const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const homeRoutes = require("./routes/home");
const actionRoutes = require("./routes/action");

const rootDir = require("./utils/path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(homeRoutes);
app.use(actionRoutes);
app.use((req, res) => {
  res.sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);

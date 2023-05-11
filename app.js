const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));

// configure template engine
app.set("view engine", "ejs");
app.set("views", "views");

app.listen(3000, () => {
  console.log("Server is running...");
});

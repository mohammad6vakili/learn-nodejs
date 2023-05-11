const express = require("express");
const bodyParser = require("body-parser");

const { setStatics } = require("./utils/setStatics");

const app = express();

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));

// configure template engine
app.set("view engine", "ejs");
app.set("views", "views");

// statics
setStatics(app);

app.listen(3000, () => {
  console.log("Server is running...");
});

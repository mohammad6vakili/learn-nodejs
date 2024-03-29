const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const sequelize = require("./utils/database");

const adminRoutes = require("./routes/admin");
const indexRoutes = require("./routes/index");
const errorController = require("./controllers/error");
const { setStatics } = require("./utils/setStatics");

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// add ejs template engine
app.set("view engine", "ejs");
app.set("views", "views");

// statics
setStatics(app);

// routes
app.use("/admin", adminRoutes);
app.use(indexRoutes);
app.use(errorController.get404);

// create server
sequelize
  .sync()
  .then((result) => {
    console.log("result is =>", result);
    app.listen(3000, () => {
      console.log("Server is running...");
    });
  })
  .catch((err) => {
    console.log(err);
  });

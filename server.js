const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const adminRoutes = require("./routes/admin");
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

app.get("/", (req, res) => {
  res.render("index", { pageTitle: "مدیریت کارها" });
});

// create server
app.listen(3000, () => {
  console.log("Server is running...");
});

const path = require("path");
const express = require("express");

const setStatics = (app) => {
  app.use(express.static(path.join(__dirname, "../", "public")));
  app.use(
    express.static(
      path.join(__dirname, "../", "node_modules", "bootstrap-v4-rtl", "dist")
    )
  );
  app.use(
    express.static(path.join(__dirname, "../", "node_modules", "font-awesome"))
  );
};

module.exports = { setStatics };

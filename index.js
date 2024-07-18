const express = require("express");
const fs = require("node:fs");

const getRouter = require("./modules/getRouter");
const saveFile = require("./modules/saveFile");

require("dotenv").config();

const testRouter = getRouter("test");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add our routes/pathing

// This BEFORE checking for an auth key.
app.get("/login", loginRouter); 

// Authkey checker
app.use((req, res, next) => {
  if (req.headers.authkey !== process.env.authkey) {
    res.redirect("/login");
  }
  next();
});

// All other routes since authkey has been checked.
app.use("/test", testRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

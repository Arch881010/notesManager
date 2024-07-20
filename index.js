const express = require("express");
const fs = require("node:fs");
const cookieParser = require("cookie-parser");

const getRouter = require("./modules/getRouter");
const saveFile = require("./modules/saveFile");
const pathResolver = require("./modules/pathResolver");

require("dotenv").config();

const testRouter = getRouter("test");
const loginRouter = getRouter("login");
const apiRouter = getRouter("api");
const viewRouter = getRouter("view");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Add our routes/pathing

// This BEFORE checking for an auth key.
app.use("/login", loginRouter);

app.use("/public", express.static("public"));

app.use("/api", apiRouter);

// Authkey checker
app.get("*", (req, res, next) => {
  if (req.cookies.authkey !== process.env.authkey && req.method != "OPTIONS") {
    return res.redirect("/login");
  }
  next();
});

app.post("*", (req, res, next) => {
  if (req.headers.authkey !== process.env.authkey && req.method != "OPTIONS") {
    return res.status(401).send("Unauthorized");
  }
  next();
});

// All other routes since authkey has been checked.
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/private/index.html");
});

app.use("/test", testRouter);

app.use('/view', viewRouter);

app.use("/info", express.static("info"));

app.get("*", (req, res) => {
  var path = req.path;
  var path = pathResolver(`../private${path}.html`);
  if (fs.existsSync(path)) {
    return res.sendFile(path);
  } 
  return res.status(404).send(`404 Not Found - Page does not exist.` );
});

app.listen(process.env.port, () => {
  console.log(`Server is running on port ${process.env.port}`);
});

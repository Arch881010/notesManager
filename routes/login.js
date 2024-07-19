const express = require("express");
const path = require("path");
const pathResolver = require("../modules/pathResolver");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(pathResolver("../private/login.html"));
});

module.exports = router;

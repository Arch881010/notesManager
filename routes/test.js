const express = require("express");
const saveFile = require("../modules/saveFile");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is a test route1");
});

router.get("/test", (req, res) => {
  res.send("This is a test route2");
  var data = saveFile("test", [ "test", "1" ], "This is a test file[gold]");
  if (!data.success) console.log(data.error);
});

module.exports = router;

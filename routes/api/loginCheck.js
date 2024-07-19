const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  //console.log(username, process.env.username, password, process.env.password);
  if (username == process.env.user && password == process.env.pass) {
    res.send({ success: true, authkey: process.env.authkey });
  } else {
    res.send({ success: false, authkey: null });
  }
});

module.exports = router;

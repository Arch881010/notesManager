const express = require("express");

const router = express.Router();

router.use("/manageFiles", require("./api/manageFiles"));
router.use("/login", require("./api/loginCheck"));

module.exports = router;

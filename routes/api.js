const express = require("express");

const router = express.Router();

router.use("/login", require("./api/loginCheck"));
router.use("/*", require("./api/manageFiles"));

module.exports = router;

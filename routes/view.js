const express = require("express");
const fs = require("node:fs");
const router = express.Router();
const convertMdToHtml = require("../modules/mdToHtml");
const pathResolver = require("../modules/pathResolver");

router.get("/", (req, res) => {
  return res.sendFile(pathResolver(`../private/view.html`));
});

router.all("/*", (req, res) => {
  const path = req.path;
  file = path.replaceAll("/", "");
  file = file.replaceAll(".md", "");

  file = pathResolver(`../files/${file}.md`);
  if (fs.existsSync(file)) {
    var md = fs.readFileSync(file, "utf8");
    //console.log(md);
    const html = convertMdToHtml(md);
    return res.send(html);
  } else {
    return res.status(404).send("File not found");
  }
});

module.exports = router;

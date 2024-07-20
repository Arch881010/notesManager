const fs = require("fs");
const editGlobal = require("./editGlobal");
function saveFile(name, tags, body) {
  data = `./files/${name}.md`;
  info = `./info/${name}.json`;
  global = `./info/global.json`;
  try {
    fs.writeFileSync(data, body);
    var removed_tags = [];
    try {
      var data = JSON.parse(fs.readFileSync(global, "utf8"));
      var dec = 0;
      for (var count in data["tags"]) {
        if (!tags.includes(data["tags"][count - dec])) {
          var rm = data["tags"].splice(count - dec, 1);
          dec += 1;
          removed_tags.push(rm[0]);
        }
      }
    } catch (error) {
      console.log(error);
    }

    var date = new Date();
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };

    var text = date.toLocaleDateString("en-us", options);

    fs.writeFileSync(info, JSON.stringify({ tags: tags, date: text }, null, 2));

    editGlobal(name, tags, removed_tags);

    return { success: true, message: "File saved", date: text };
  } catch (error) {
    return { success: false, message: "File not saved", error: error };
  }
}

module.exports = saveFile;

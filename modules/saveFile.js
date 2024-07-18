var fs = require("fs");
function saveFile(name, tags, body) {
  data = `./files/${name}.txt`;
  info = `./info/${name}.json`;
  try {
    fs.writeFileSync(data, body);

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

    return { success: true, message: "File saved", date: text };
  } catch (error) {
    return { success: false, message: "File not saved", error: error };
  }
}

module.exports = saveFile;

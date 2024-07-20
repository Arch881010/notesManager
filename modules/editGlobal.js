// TODO: Add comments, rewrite this because jeezus christ who needs this many try/catch blocks? 

const fs = require("fs");
function editGlobal(name, tags, removedtags) {
  const global = `./info/global.json`;
  name = name.replaceAll(".md", "");
  var data = JSON.parse(fs.readFileSync(global, "utf8"));

  try {
    for (var tag of tags) {
      if (!tag) {
        console.log("Just tried to write tags without a tag?");
        throw new Error("Tag is empty?");
      }
      try {
        list = data[tag];
        if (list == undefined) {
          throw new Error("Tag is not defined");
        }
        if (list.includes(name)) {
          continue;
        }
        list.push(name);
        data[tag] = list;
      } catch (error) {
        data[tag] = [name];
        try {
          data["tags"].push(tag);
        } catch (error) {
          data["tags"] = [tag];
        }
      }
    }

    for (var tag of removedtags) {
      if (removedtags == undefined) {
        break;
      }
      data[tag].splice(data[tag].indexOf(name), 1);
    }
    fs.writeFileSync(global, JSON.stringify(data, null, 2));
    return { success: true, message: "Global tags updated" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Global tags not updated", error: error };
  }
}

module.exports = editGlobal;

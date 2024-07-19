const path = require("path");
function resolvePath(file) {
  var where = path.join(__dirname, file);
  where = path.resolve(where);
  return where;
}

module.exports = resolvePath;

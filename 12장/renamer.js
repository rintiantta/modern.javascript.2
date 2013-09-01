(function() {
  var dir, fs;

  fs = require("fs");

  dir = fs.readdirSync(".");

  dir.forEach(function(item) {
    if (item.indexOf(".html") !== -1) {
      fs.renameSync(item, "12-" + item);
    }
    return console.log(item);
  });

}).call(this);

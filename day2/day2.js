// var fungsilat = require('./latihan')
var fs = require("fs");

fs.writeFile("coba.js", "tes", err => {
  if (err) throw err;
  console.log("The file has been saved!");
});

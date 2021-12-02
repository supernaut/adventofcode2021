const fs = require("fs");
const path = require("path");
const data = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");

module.exports = data
  .split("\n")
  .filter((row) => !!row)
  .map((row) => parseInt(row, 10));

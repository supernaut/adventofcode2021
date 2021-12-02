const fs = require("fs");
const path = require("path");
const data = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");
const calculateIncreases = require("./calculateIncreases");

console.log(calculateIncreases(data.split("\n")));

module.exports = {
  calculateIncreases,
};

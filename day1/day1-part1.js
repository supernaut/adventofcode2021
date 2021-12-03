const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.resolve(__dirname, "input"), "utf8");

const increases = input
  .split("\n")
  .filter((row) => !!row)
  .map((row) => parseInt(row, 10))
  .map((value, index, all) => (value > all[index - 1] ? 1 : 0))
  .reduce((a, b) => a + b, 0);

console.log(increases);

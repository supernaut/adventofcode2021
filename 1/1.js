const fs = require("fs");
const path = require("path");
const data = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");

let increases = 0;

data.split("\n").map((row, index, all) => {
  if (parseInt(row, 10) > parseInt(all[index - 1])) {
    increases += 1;
  }
});

console.log(increases);

const fs = require("fs");
const path = require("path");
const data = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");
const calculateIncreases = require("./calculateIncreases");

const groups = [];

data
  .split("\n")
  .filter((row) => !!row)
  .map((row, index, all) => {
    if (index + 2 < all.length) {
      groups.push(
        [
          parseInt(row, 10),
          parseInt(all[index + 1], 10),
          parseInt(all[index + 2], 10),
        ].reduce((a, b) => a + b)
      );
    }
  });

console.log(calculateIncreases(groups));

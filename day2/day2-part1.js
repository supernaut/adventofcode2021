const fs = require("fs");
const path = require("path");
const data = fs.readFileSync(path.resolve(__dirname, "input"), "utf8");

const position = {
  horizontal: 0,
  depth: 0,
};

data
  .split("\n")
  .filter((row) => !!row)
  .forEach((row) => {
    const [direction, raw] = row.trim().split(" ");
    const value = parseInt(raw, 10);
    switch (direction) {
      case "forward":
        position.horizontal += value;
        break;
      case "down":
        position.depth += value;
        break;
      case "up":
        position.depth -= value;
        break;
    }
  });

console.log(position.horizontal * position.depth);

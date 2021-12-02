const fs = require("fs");
const path = require("path");
const data = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");

const position = {
  horizontal: 0,
  depth: 0,
  aim: 0,
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
        position.depth += position.aim * value;
        break;
      case "down":
        position.aim += value;
        break;
      case "up":
        position.aim -= value;
        break;
    }
  });

console.log(position.horizontal * position.depth);

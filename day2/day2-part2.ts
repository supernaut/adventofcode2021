import { solution, title } from "../shared/output";

import { readFileSync } from "fs";
import { resolve } from "path";
const data = readFileSync(resolve(__dirname, "input"), "utf8");

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

title(2, 2);
solution(position.horizontal * position.depth);

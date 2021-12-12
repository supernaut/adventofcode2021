import { solution, title } from "../shared/output";

import { input as data } from "./data";
import { hrtime } from "process";

const start = hrtime();

title(2, 2);

const position = {
  horizontal: 0,
  depth: 0,
  aim: 0,
};

data.forEach(([direction, value]) => {
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

solution(position.horizontal * position.depth, hrtime(start));

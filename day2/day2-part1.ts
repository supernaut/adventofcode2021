import { solution, title } from "../shared/output";

import { input as data } from "./data";
import { hrtime } from "process";

const start = hrtime();

title(2, 1);

const position = {
  horizontal: 0,
  depth: 0,
};

data.forEach(([direction, value]) => {
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

solution(position.horizontal * position.depth, hrtime(start));

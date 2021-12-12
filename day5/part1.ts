import { solution, title } from "../shared/output";

import { input as data } from "./data";
import { hrtime } from "process";
import { solve } from "./solve";

const start = hrtime();

title(5, 1);

const count = solve(
  data.filter(({ from, to }) => from.x === to.x || from.y === to.y)
);

solution(count, hrtime(start));

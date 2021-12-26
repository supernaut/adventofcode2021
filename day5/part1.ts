import { hrtime } from "process";
import { summary, title } from "../shared/output";
import { input as data } from "./data";
import { solve } from "./solve";

const start = hrtime();

title(5, 1);

const solution = solve(
  data.filter(({ from, to }) => from.x === to.x || from.y === to.y)
);

summary(solution, hrtime(start));

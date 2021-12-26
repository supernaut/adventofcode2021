import { hrtime } from "process";
import { summary, title } from "../shared/output";
import { input as data } from "./data";
import { solve } from "./solve";

const start = hrtime();

title(6, 1);

const solution = solve(data, 80);

summary(solution, hrtime(start));

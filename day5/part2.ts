import { hrtime } from "process";
import { summary, title } from "../shared/output";
import { input as data } from "./data";
import { solve } from "./solve";

const start = hrtime();

title(5, 2);

const solution = solve(data);

summary(solution, hrtime(start));

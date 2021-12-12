import { solution, title } from "../shared/output";

import { input as data } from "./data";
import { hrtime } from "process";
import { solve } from "./day6-solution";

const start = hrtime();

title(6, 1);

const count = solve(data, 80);

solution(count, hrtime(start));

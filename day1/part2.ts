import { solution, title } from "../shared/output";

import { input as data } from "./data";
import { hrtime } from "process";
import { solve } from "./solve";

const start = hrtime();

title(1, 2);

const value = solve(data, 3);

solution(value, hrtime(start));

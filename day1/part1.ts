import { solution, title } from "../shared/output";

import { input as data } from "./data";
import { hrtime } from "process";
import { solve } from "./solve";

const start = hrtime();

title(1, 1);

const value = solve(data);

solution(value, hrtime(start));
import { solution, title } from "../shared/output";

import { input as data } from "./data";
import { hrtime } from "process";
import { solve } from "./solve";

const start = hrtime();

title(6, 2);

const count = solve(data, 256);

solution(count, hrtime(start));

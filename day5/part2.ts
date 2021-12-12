import { solution, title } from "../shared/output";

import { input as data } from "./data";
import { hrtime } from "process";
import { solve } from "./solve";

const start = hrtime();

title(5, 2);

const count = solve(data);

solution(count, hrtime(start));

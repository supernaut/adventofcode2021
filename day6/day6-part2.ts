import { solution, title } from "../shared/output";

import { example as data } from "./data";
import { hrtime } from "process";

const start = hrtime();

title(6, 2);

console.log(data);

solution(0, hrtime(start));

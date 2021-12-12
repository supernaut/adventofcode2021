import { solution, title } from "../shared/output";

import { input as data } from "./data";
import { hrtime } from "process";

const start = hrtime();

title(6, 1);

const days = 80;

const school = [...data];

for (let day = 1; day <= days; day += 1) {
  const length = school.length;
  for (let i = 0; i < length; i += 1) {
    if (school[i] === 0) {
      school[i] = 6;
      school.push(8);
    } else {
      school[i] -= 1;
    }
  }
}

solution(school.length, hrtime(start));

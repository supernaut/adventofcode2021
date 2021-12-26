import { hrtime } from "process";
import { additionReducer } from "../shared/helpers";
import { summary, title } from "../shared/output";
import { input as data } from "./data";

const start = hrtime();
title(7, 1);

const solve = (target: number, values: number[]) =>
  values.map((value) => Math.abs(target - value)).reduce(additionReducer);

const output = [...new Set(data)].map((value) => solve(value, data));
output.sort((a, b) => a - b);

const solution = output.shift() || 0;

summary(solution, hrtime(start));

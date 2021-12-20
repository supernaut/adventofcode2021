import { hrtime } from "process";
import { additionReducer } from "../shared/helpers";
import { solution, title } from "../shared/output";
import { input as data } from "./data";

const start = hrtime();
title(7, 2);

const triangle = (n: number) => (n * (n + 1)) / 2;

const sorted = [...data];
sorted.sort((a, b) => a - b);

const high = sorted.pop() || 0;

const solve = (target: number, values: number[]) =>
  values
    .map((value) => triangle(Math.abs(target - value)))
    .reduce(additionReducer);

let cost = 0;

for (let i = 0; i <= high; i += 1) {
  const value = solve(i, data);
  if (!cost || value < cost) {
    cost = value;
  }
}

solution(cost, hrtime(start));

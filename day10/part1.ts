import { hrtime } from "process";
import { summary, title } from "../shared/output";
import { input as data } from "./data";

const start = hrtime();
title(10, 1);

const cleanPairs = /(\(\)|<>|\[\]|\{\})/g;

const solve = (input: Array<string>): number => {
  let points = 0;
  input.forEach((row) => {
    let clean = row;
    while (clean.match(cleanPairs)?.length) {
      clean = clean.replace(cleanPairs, "");
    }
    switch (clean.match(/(>|\}|\]|\))/g)?.[0]) {
      case ")":
        points += 3;
        break;
      case "]":
        points += 57;
        break;
      case "}":
        points += 1197;
        break;
      case ">":
        points += 25137;
        break;
    }
  });

  return points;
};

const solution = solve(data);

summary(solution, hrtime(start));

import chalk from "chalk";
import { hrtime } from "process";
import { additionReducer } from "../shared/helpers";
import { summary, title } from "../shared/output";
import { input as data } from "./data";

const start = hrtime();
title(9, 1);

type Matrix = Array<Array<number>>;

interface Location {
  x: number;
  y: number;
  value: number;
}

const solve = (input: Matrix) => {
  const found: Location[] = [];
  input.forEach((row, y, outer) => {
    const output: string[] = [];
    row.forEach((value, x, row) => {
      const compare: number[] = [];
      if (y > 0) {
        // not first row
        compare.push(outer[y - 1][x]);
      }
      if (y < outer.length - 1) {
        // not last row
        compare.push(outer[y + 1][x]);
      }
      if (x > 0) {
        // not first col
        compare.push(row[x - 1]);
      }
      if (x < row.length - 1) {
        // not last col
        compare.push(row[x + 1]);
      }

      if (
        !compare
          .map((input): number => (input <= value ? 1 : 0))
          .reduce(additionReducer)
      ) {
        found.push({ x, y, value });
        output.push(chalk.green(value));
      } else {
        output.push(chalk.white(value));
      }
    });
    console.log(output.join(""));
  });
  console.log("");

  return found.map(({ value }): number => value + 1).reduce(additionReducer);
};

const solution = solve(data);

summary(solution, hrtime(start));

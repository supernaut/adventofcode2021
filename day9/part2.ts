import chalk from "chalk";
import { hrtime } from "process";
import { additionReducer } from "../shared/helpers";
import { summary, title } from "../shared/output";
import { input as data } from "./data";

const start = hrtime();
title(9, 2);

type Matrix = Array<Array<number>>;

interface Location {
  x: number;
  y: number;
  value: number;
}

export const uniqueLocationFilter = (
  value: Location,
  index: number,
  array: Array<Location>
): boolean => array.indexOf(value) === index;

const basin = (data: Matrix, location: Location): Location[] => {
  const { x, y } = location;
  let locations = [location];
  if (y > 0) {
    // not first row
    const value = data[y - 1][x];
    const newLocation = { x, y: y - 1, value };
    if (value < 9 && value > location.value) {
      locations = [...locations, ...basin(data, newLocation)];
    }
  }
  if (y < data.length - 1) {
    // not last row
    const value = data[y + 1][x];
    const newLocation = { x, y: y + 1, value };
    if (value < 9 && value > location.value) {
      locations = [...locations, ...basin(data, newLocation)];
    }
  }
  if (x > 0) {
    // not first col
    const value = data[y][x - 1];
    const newLocation = { x: x - 1, y, value };
    if (value < 9 && value > location.value) {
      locations = [...locations, ...basin(data, newLocation)];
    }
  }
  if (x < data[y].length - 1) {
    // not last col
    const value = data[y][x + 1];
    const newLocation = { x: x + 1, y, value };
    if (value < 9 && value > location.value) {
      locations = [...locations, ...basin(data, newLocation)];
    }
  }

  return [
    ...new Map(locations.map((item) => [`${item.x}-${item.y}`, item])).values(),
  ];
};

const solve = (input: Matrix, display = false) => {
  const found: Location[] = [];
  input.forEach((row, y) => {
    const output: string[] = [];
    row.forEach((value, x) => {
      const compare: number[] = [];
      if (y > 0) {
        // not first row
        compare.push(input[y - 1][x]);
      }
      if (y < input.length - 1) {
        // not last row
        compare.push(input[y + 1][x]);
      }
      if (x > 0) {
        // not first col
        compare.push(input[y][x - 1]);
      }
      if (x < input[y].length - 1) {
        // not last col
        compare.push(input[y][x + 1]);
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
  });

  const result = found.map((value) => {
    const result = basin(input, value);
    input.forEach((row, y) => {
      const output: string[] = [];
      row.forEach((value, x) => {
        if (found.find((item) => item.x === x && item.y === y)) {
          output.push(chalk.green(value));
        } else if (result.find((item) => item.x === x && item.y === y)) {
          output.push(chalk.yellow(value));
        } else {
          output.push(chalk.white(value));
        }
      });
      if (display) {
        console.log(output.join(""));
      }
    });
    if (display) {
      console.log("");
    }
    return result.length;
  });

  // Extra step for sorting
  result.sort((a, b) => b - a);

  return result.splice(0, 3).reduce((a, b) => a * b);
};

const solution = solve(data);

summary(solution, hrtime(start));

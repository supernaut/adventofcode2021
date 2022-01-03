import { hrtime } from "process";
import { summary, title } from "../shared/output";
import { input as data } from "./data";

/*
Improved solution, hat tip to sk1talets
https://www.reddit.com/r/adventofcode/comments/rca6vp/comment/hok5jnn/
*/

const start = hrtime();
title(9, 2);

type Matrix = Array<Array<number>>;

const MAX_HEIGHT = 9;

const getHeight = (map: Matrix, x: number, y: number) => {
  return map[y][x];
};

const getAdjacent = (map: Matrix, x: number, y: number) => {
  return [
    [x, y - 1],
    [x + 1, y],
    [x, y + 1],
    [x - 1, y],
  ].filter(([x, y]) => y in map && x in map[y]);
};

const scanBasin = (
  map: Matrix,
  x: number,
  y: number,
  low: null | number = null,
  points: string[] = []
) => {
  const height = getHeight(map, x, y);

  if (low === null) {
    low = height;
  }

  points.push([x, y].join());

  for (const [xx, yy] of getAdjacent(map, x, y)) {
    if (points.includes([xx, yy].join())) {
      continue;
    }

    const adjacentHeight = getHeight(map, xx, yy);

    if (adjacentHeight >= MAX_HEIGHT) {
      continue;
    }

    if (adjacentHeight < low) {
      return false;
    }

    if (!scanBasin(map, xx, yy, low, points)) {
      return false;
    }
  }

  return points;
};

const solve = (input: Matrix) => {
  const sizes = [];
  for (let y = 0; y < input.length; y += 1) {
    for (let x = 0; x < input[y].length; x += 1) {
      const points = scanBasin(input, x, y);

      if (points) {
        sizes.push(points.length);
      }
    }
  }
  return sizes
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((n, res) => (res *= n));
};

const solution = solve(data);

summary(solution, hrtime(start));

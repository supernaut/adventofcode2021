import { solution, title } from "../shared/output";

import { input as data } from "./data";
import { hrtime } from "process";

title(5, 2);
const start = hrtime();

const size = 1024;
const arrayBuffer = new ArrayBuffer(size * size);
const buffer = new Int8Array(arrayBuffer).fill(0);

const getIndex = (x: number, y: number): number => x + y * size;

for (let l = 0; l < data.length; l += 1) {
  const { from, to } = data[l];
  const steps = Math.max(Math.abs(from.x - to.x), Math.abs(from.y - to.y));

  for (let i = 0; i <= steps; i += 1) {
    const x =
      from.x === to.x ? from.x : from.x < to.x ? from.x + i : from.x - i;
    const y =
      from.y === to.y ? from.y : from.y < to.y ? from.y + i : from.y - i;
    buffer[getIndex(x, y)]++;
  }
}

const count = buffer.filter((value) => value > 1).length;

solution(count, hrtime(start));

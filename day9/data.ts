import { readFileSync } from "fs";
import { resolve } from "path";

const parseData = (file: string): Array<number[]> =>
  readFileSync(resolve(__dirname, file), "utf8")
    .trim()
    .split("\n")
    .map((row) =>
      row
        .trim()
        .split("")
        .map((value) => parseInt(value, 10))
    );

export const example = parseData("example");
export const input = parseData("input");

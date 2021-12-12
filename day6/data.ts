import { join } from "path";
import { readFileSync } from "fs";

const readData = (file: string): number[] =>
  readFileSync(join(__dirname, file), "utf-8")
    .split(",")
    .filter((value) => !!value)
    .map((value) => parseInt(value, 10));

export const example = readData("example");
export const input = readData("input");

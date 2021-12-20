import { readFileSync } from "fs";
import { resolve } from "path";
import { nullFilter } from "../shared/helpers";

const parseData = (file: string): number[] =>
  readFileSync(resolve(__dirname, file), "utf8")
    .trim()
    .split("\n")
    .filter(nullFilter)
    .map((value) => parseInt(value, 10));

export const example = parseData("example");
export const input = parseData("input");

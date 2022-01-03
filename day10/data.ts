import { readFileSync } from "fs";
import { resolve } from "path";
import { nullFilter } from "../shared/helpers";

const parseData = (file: string): Array<string> =>
  readFileSync(resolve(__dirname, file), "utf8")
    .trim()
    .split("\n")
    .filter(nullFilter);

export const example = parseData("example");
export const input = parseData("input");

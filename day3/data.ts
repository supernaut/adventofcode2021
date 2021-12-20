import { readFileSync } from "fs";
import { resolve } from "path";

const parseData = (file: string) =>
  readFileSync(resolve(__dirname, file), "utf8")
    .trim()
    .split("\n")
    .filter((value) => !!value);

export const input = parseData("input");
export const example = parseData("example");

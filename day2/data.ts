import { readFileSync } from "fs";
import { resolve } from "path";

export type Direction = "forward" | "down" | "up";

export type Instruction = [Direction, number];

const parseData = (file: string): Instruction[] =>
  readFileSync(resolve(__dirname, file), "utf8")
    .split("\n")
    .filter((value) => !!value)
    .map((value) => {
      const parts = value.split(" ");
      return [parts[0], parseInt(parts[1], 10)] as Instruction;
    });

export const input = parseData("input");
export const example = parseData("example");

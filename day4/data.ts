import { readFileSync } from "fs";
import { resolve } from "path";
import { nullFilter } from "../shared/helpers";

export type BingoBoard = Array<number[]>;

export interface BingoData {
  draw: number[];
  boards: BingoBoard[];
}

const parseData = (file: string): BingoData => {
  const parts: string[] = readFileSync(resolve(__dirname, file), "utf8")
    .trim()
    .split("\n\n")
    .filter((value) => !!value);

  return {
    draw:
      parts
        .shift()
        ?.split(",")
        .map((item) => parseInt(item, 10)) || [],
    boards:
      parts.map((block) =>
        block.split("\n").map((row) =>
          row
            .split(" ")
            .filter(nullFilter)
            .map((item) => parseInt(item.trim(), 10))
        )
      ) || [],
  };
};

export const input = parseData("input");
export const example = parseData("example");

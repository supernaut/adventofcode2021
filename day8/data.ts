import { readFileSync } from "fs";
import { resolve } from "path";
import { nullFilter } from "../shared/helpers";

export interface Entry {
  patterns: string[];
  output: string[];
}

// const parseData = (file: string): Entry[] =>
//   readFileSync(resolve(__dirname, file), "utf8")
//     .trim()
//     .replace("|\n", "| ")
//     .split("\n")
//     .map((row): Entry => {
//       const [patterns, output] = row.split(" | ").filter(nullFilter);
//       return {
//         patterns: patterns.split(" ").filter(nullFilter),
//         output: output.split(" ").filter(nullFilter),
//       };
//     })
//     .filter(nullFilter);

const parseData = (file: string): Entry[] => {
  const raw = readFileSync(resolve(__dirname, file), "utf8")
    .trim()
    .replace(/\|\s?\n/g, "| ");
  const rows = raw.split("\n");

  const tmp = rows.map((row) => {
    const [patterns, output] = row.split(" | ").filter(nullFilter);

    return {
      patterns: patterns.split(" ").filter(nullFilter),
      output: output.split(" ").filter(nullFilter),
    };
  });

  if (file === "example") {
    // console.log(tmp);
  }
  //   readFileSync(resolve(__dirname, file), "utf8")
  //     .trim()
  //     .replace("|\n", "| ")
  //     .split("\n")
  //     .map((row): Entry => {
  //       const [patterns, output] = row.split(" | ").filter(nullFilter);
  //       return {
  //         patterns: patterns.split(" ").filter(nullFilter),
  //         output: output.split(" ").filter(nullFilter),
  //       };
  //     })
  //     .filter(nullFilter);
  return tmp;
};

export const example = parseData("example");
export const input = parseData("input");

import { hrtime } from "process";
import {
  additionReducer,
  getByValue,
  mergeStrings,
  sort,
  stringDifference,
} from "../shared/helpers";
import { summary, title } from "../shared/output";
import { Entry, input as data } from "./data";

const start = hrtime();
title(8, 2);

const getUniqueLengthValue = (input: string[], length: number): string =>
  sort(input.find((value) => value.length === length) || "");

const solveEntry = (entry: Entry) => {
  const { patterns, output } = entry;
  // Set up map for storing values and populate with known values
  const values: Map<number, string> = new Map([
    [1, getUniqueLengthValue(patterns, 2)],
    [4, getUniqueLengthValue(patterns, 4)],
    [7, getUniqueLengthValue(patterns, 3)],
    [8, getUniqueLengthValue(patterns, 7)],
  ]);

  // Deduce positions
  const findOne = (input: string[]): string =>
    input.find((value) => value.length === 1) || "";
  const findTwo = (input: string[], exclude: string): string =>
    stringDifference(
      input.find((value) => value.length === 2),
      exclude
    );

  const fiveLong = patterns.filter((value) => value.length === 5);
  const merge4and7 = mergeStrings(values.get(4) || "", values.get(7) || "");
  const a = stringDifference(values.get(7) || "", values.get(1) || "");
  const eg = fiveLong.map((value) => stringDifference(value, merge4and7));
  const g = findOne(eg);
  const e = findTwo(eg, g);
  const bd = fiveLong.map((value) =>
    stringDifference(value, (values.get(7) || "") + e + g)
  );
  const d = findOne(bd);
  const b = findTwo(bd, d);
  const cf = patterns
    .filter((value) => value.length === 6)
    .map((value) => stringDifference(value, a + b + d + e + g));
  const f = findOne(cf);
  const c = findTwo(cf, f);

  // Deduce and set values
  values.set(0, sort(a + b + c + e + f + g));
  values.set(2, sort(a + c + d + e + g));
  values.set(3, sort(a + c + d + f + g));
  values.set(5, sort(a + b + d + f + g));
  values.set(6, sort(a + b + d + e + f + g));
  values.set(9, sort(a + b + c + d + f + g));

  // Get numeric value
  return parseInt(
    output.map((value) => `${getByValue(values, sort(value))}`).join(""),
    10
  );
};

const solve = (input: Entry[]): number => {
  return input.map(solveEntry).reduce(additionReducer);
};

const solution = solve(data);

summary(solution, hrtime(start));

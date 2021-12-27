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

const solveEntry = (entry: Entry) => {
  const { patterns, output } = entry;
  // Set up maps for storing intermediates
  const places: Map<string, string> = new Map();
  const values: Map<number, string> = new Map();

  // Store already known values
  values.set(1, sort(patterns.find((value) => value.length === 2) || ""));
  values.set(4, sort(patterns.find((value) => value.length === 4) || ""));
  values.set(7, sort(patterns.find((value) => value.length === 3) || ""));
  values.set(8, sort(patterns.find((value) => value.length === 7) || ""));

  // Deduce positions
  const fiveLong = patterns.filter((value) => value.length === 5);
  const sixLong = patterns.filter((value) => value.length === 6);
  const merge47 = mergeStrings(values.get(4) || "", values.get(7) || "");
  const a = stringDifference(values.get(7) || "", values.get(1) || "");
  const eg = fiveLong.map((value) => stringDifference(value, merge47));
  const g = eg.find((value) => value.length === 1) || "";
  const e = stringDifference(
    eg.find((value) => value.length === 2),
    g
  );
  const bd = fiveLong.map((value) =>
    stringDifference(value, (values.get(7) || "") + e + g)
  );
  const d = bd.find((value) => value.length === 1) || "";
  const b = stringDifference(
    bd.find((value) => value.length === 2),
    d
  );
  const cf = sixLong.map((value) => stringDifference(value, a + b + d + e + g));
  const f = cf.find((value) => value.length === 1) || "";
  const c =
    stringDifference(
      cf.find((value) => value.length === 2),
      f
    ) || "";

  // Set places
  places.set("a", a);
  places.set("b", b);
  places.set("c", c);
  places.set("d", d);
  places.set("e", e);
  places.set("f", f);
  places.set("g", g);

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

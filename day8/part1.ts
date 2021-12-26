import { hrtime } from "process";
import { additionReducer } from "../shared/helpers";
import { summary, title } from "../shared/output";
import { Entry, input as data } from "./data";

const start = hrtime();
title(8, 1);

const solve = (input: Entry[]): number =>
  input
    .map(
      (entry: Entry) =>
        entry.output.filter((value) => [2, 3, 4, 7].includes(value.length))
          .length
    )
    .reduce(additionReducer);

const solution = solve(data);

summary(solution, hrtime(start));

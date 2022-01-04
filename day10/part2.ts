import { hrtime } from "process";
import { summary, title } from "../shared/output";
import { input as data } from "./data";

const start = hrtime();
title(10, 2);

const cleanPairs = /(\(\)|<>|\[\]|\{\})/g;

const solve = (input: Array<string>): number => {
  const scores: Array<number> = input
    .map((row) => {
      let clean = row;
      while (clean.match(cleanPairs)?.length) {
        clean = clean.replace(cleanPairs, "");
      }
      return clean;
    })
    .filter((value) => !value.match(/(>|\}|\]|\))/g)?.length)
    .map((value) => {
      let score = 0;
      [...value].reverse().forEach((char) => {
        score *= 5;
        switch (char) {
          case "(":
            score += 1;
            return ")";
          case "[":
            score += 2;
            return "]";
          case "{":
            score += 3;
            return "}";
          case "<":
            score += 4;
            return ">";
        }
      });
      return score;
    })
    .sort((a, b) => b - a);

  return scores[Math.floor(scores.length / 2)];
};

const solution = solve(data);

summary(solution, hrtime(start));

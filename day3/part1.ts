import { hrtime } from "process";
import { summary, title } from "../shared/output";
import { input } from "./data";

const start = hrtime();
title(3, 1);

const values: number[] = [];

input.forEach((line) => {
  // Loop over each digit and tick up column counter
  [...line].forEach((digit, index) => {
    values[index] = parseInt(digit, 10) + (values[index] || 0);
  });
});
// Loop over columns and create binary value from majority value
const binary = values
  .map((value: number) => (value / input.length > 0.5 ? 1 : 0))
  .join("");

// Parse binary to decimal
const gamma = parseInt(binary, 2);

// Invert binary value to get epsilon
const epsilon = ~gamma + Math.pow(2, binary.length);

// Multiply values in output
const solution = gamma * epsilon;

summary(solution, hrtime(start));

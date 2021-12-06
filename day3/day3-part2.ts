import { solution, title } from "../shared/output";

import { input } from "./data";

title(3, 2);

const reduceData = (
  input: string[],
  mode: "most" | "least" = "most",
  position = 0,
  length = 12
): string => {
  if (input.length === 1) {
    return input[0];
  } else {
    const filteredOnes = input
      .map((value) => value.charAt(position))
      .filter((value) => value === "1");
    const mostPopular = filteredOnes.length >= input.length / 2 ? "1" : "0";
    const subset = input.filter((value) =>
      mode === "most"
        ? value.charAt(position) === mostPopular
        : value.charAt(position) !== mostPopular
    );
    return reduceData(subset, mode, position + 1, length);
  }
};

const oxygenGeneratorRating = reduceData(input, "most");
const co2ScrubberRating = reduceData(input, "least");

const oxygenGeneratorRatingDecimal = parseInt(oxygenGeneratorRating, 2);
const co2ScrubberRatingDecimal = parseInt(co2ScrubberRating, 2);

solution(oxygenGeneratorRatingDecimal * co2ScrubberRatingDecimal);

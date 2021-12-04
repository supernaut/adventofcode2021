import { input } from "./data";
import { additionReducer, mapIncreaseCheck } from "./day1-shared";

const mapGroupByThree = (_row: number, index: number, all: number[]): number =>
  all.slice(index, index + 3).reduce(additionReducer, 0);

const increases = input
  .map(mapGroupByThree)
  .map(mapIncreaseCheck)
  .reduce(additionReducer, 0);

console.log(increases);

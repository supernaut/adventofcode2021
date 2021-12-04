import { input } from "./data";
import { additionReducer, mapIncreaseCheck } from "./day1-shared";

console.log(input.length);

const increases = input.map(mapIncreaseCheck).reduce(additionReducer, 0);

console.log(increases);

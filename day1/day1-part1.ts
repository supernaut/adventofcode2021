import { solution, title } from "../shared/output";

import { additionReducer } from "../shared/helpers";
import { input } from "./data";
import { mapIncreaseCheck } from "./day1-shared";

const increases = input.map(mapIncreaseCheck).reduce(additionReducer, 0);

title(1, 1);
solution(increases);

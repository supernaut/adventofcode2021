import { additionReducer } from "../shared/helpers";

export const solve = (data: number[], stepSize = 1) =>
  data
    .map((_value, index, array) =>
      array.slice(index, index + stepSize).reduce(additionReducer, 0)
    )
    .map((value, index, all) => (value > all[index - 1] ? 1 : 0))
    .reduce(additionReducer, 0);

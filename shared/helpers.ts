export const nullFilter = (value: any): boolean => !!value;

export const additionReducer = (a: number, b: number): number => a + b;

export const intersection = (array1: string[], array2: string[]): string[] =>
  array1.filter((value: string) => array2.includes(value));

export const stringIntersection = (input1 = "", input2 = "") =>
  intersection([...input1], [...input2]).join("");

export const difference = (array1: string[], array2: string[]): string[] =>
  array1.filter((value) => !array2.includes(value));

export const stringDifference = (input1 = "", input2 = "") =>
  difference([...input1], [...input2]).join("");

export const symmetricalDifference = (
  array1: string[],
  array2: string[]
): string[] =>
  array1
    .filter((x) => !array2.includes(x))
    .concat(array2.filter((x) => !array1.includes(x)));

export const stringSymmetricalDifference = (input1 = "", input2 = "") =>
  symmetricalDifference([...input1], [...input2]).join("");

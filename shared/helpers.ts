export const nullFilter = (value: any): boolean => !!value;

export const additionReducer = (a: number, b: number): number => a + b;

export const intersection = (array1: string[], array2: string[]): string[] =>
  array1.filter((value: string) => array2.includes(value));

export const stringIntersection = (input1 = "", input2 = "") =>
  intersection([...input1], [...input2]).join("");

export const difference = (array1: string[], array2: string[]): string[] =>
  array1.filter((value) => !array2.includes(value)).filter(nullFilter);

export const stringDifference = (input1 = "", input2 = "") =>
  difference([...input1], [...input2])
    .filter(nullFilter)
    .join("");

export const symmetricalDifference = (
  array1: string[],
  array2: string[]
): string[] =>
  array1
    .filter((x) => !array2.includes(x))
    .concat(array2.filter((x) => !array1.includes(x)));

export const stringSymmetricalDifference = (input1 = "", input2 = "") =>
  symmetricalDifference([...input1], [...input2]).join("");

export const merge = (input1: string[], input2: string[]): string[] =>
  [...new Set([...input1, ...input2])].filter(nullFilter) as string[];

export const mergeStrings = (input1: string, input2: string) =>
  merge(input1.split(""), input2.split("")).join("");

export const sort = (input: string): string => [...input].sort().join("");

export const getByValue = <T = number>(
  map: Map<T, string>,
  searchValue: string
): T | undefined => {
  for (const [key, value] of map.entries()) {
    if (value === searchValue) return key;
  }
};

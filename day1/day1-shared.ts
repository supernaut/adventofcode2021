export const mapStringToNumber = (row: string): number => parseInt(row, 10);
export const mapIncreaseCheck = (
  value: number,
  index: number,
  all: number[]
): number => (value > all[index - 1] ? 1 : 0);

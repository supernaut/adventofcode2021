import { solution, title } from "../shared/output";
import { input as data, VentLine } from "./data";

title(5, 1);

const points = data.flatMap(({ from, to }: VentLine) => {
  const line: string[] = [];
  const diffX = Math.abs(from.x - to.x);
  const diffY = Math.abs(from.y - to.y);
  const steps = Math.max(diffX, diffY) - 1;
  const intervalX = diffX / (steps + 1);
  const intervalY = diffY / (steps + 1);

  line.push(`${from.x},${from.y}`);

  for (let i = 1; i <= steps; i++) {
    const x =
      from.x === to.x
        ? from.x
        : from.x < to.x
        ? from.x + intervalX * i
        : from.x - intervalX * i;
    const y =
      from.y === to.y
        ? from.y
        : from.y < to.y
        ? from.y + intervalY * i
        : from.y - intervalY * i;
    line.push(`${x},${y}`);
  }
  line.push(`${to.x},${to.y}`);

  return line;
});

const count = points
  .map((point) => points.filter((value) => value === point))
  .filter((value) => value.length > 1)
  .map((value) => value[0])
  .filter(
    (value: string, index: number, array: string[]) =>
      array.indexOf(value) === index
  ).length;

solution(count);

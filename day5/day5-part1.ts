import { solution, title } from "../shared/output";
import { input as data, VentLine } from "./data";

title(5, 1);

const straightLineFilter = ({ from, to }: VentLine) =>
  from.x === to.x || from.y === to.y;

const points = data
  .filter(straightLineFilter)
  .flatMap(({ from, to }: VentLine) => {
    const line: string[] = [];
    const diffX = Math.abs(from.x - to.x);
    const diffY = Math.abs(from.y - to.y);
    const steps = Math.max(diffX, diffY) - 1;
    const intervalX = diffX / (steps + 1);
    const intervalY = diffY / (steps + 1);

    const fromRaw = `${from.x},${from.y}`;

    line.push(fromRaw);

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
      const stepRaw = `${x},${y}`;
      line.push(stepRaw);
    }
    const toRaw = `${to.x},${to.y}`;
    line.push(toRaw);

    return line;
  });

const uniqueFilter = (value: string, index: number, array: string[]) =>
  array.indexOf(value) === index;

const count = points
  .map((point) => points.filter((value) => value === point))
  .filter((value) => value.length > 1)
  .map((value) => value[0])
  .filter(uniqueFilter).length;

solution(count);

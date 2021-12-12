import { VentLine } from "./data";

export const solve = (input: VentLine[]): number => {
  const size = 1024;
  const arrayBuffer = new ArrayBuffer(size * size);
  const buffer = new Int8Array(arrayBuffer).fill(0);

  input.forEach(({ from, to }) => {
    const steps = Math.max(Math.abs(from.x - to.x), Math.abs(from.y - to.y));

    for (let i = 0; i <= steps; i += 1) {
      const x =
        from.x === to.x ? from.x : from.x < to.x ? from.x + i : from.x - i;
      const y =
        from.y === to.y ? from.y : from.y < to.y ? from.y + i : from.y - i;
      buffer[x + y * size]++;
    }
  });

  return buffer.filter((value) => value > 1).length;
};

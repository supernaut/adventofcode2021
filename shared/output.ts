import chalk from "chalk";

export const title = (day: number, part: number) => {
  console.clear();
  console.log(
    chalk.green("🎄 Advent of Code 2021 - Day %s, Part %s 🎄"),
    day,
    part
  );
  console.log("");
};

export const solution = (solution: string | number) => {
  console.log(chalk.green("💡 Solution"), chalk.greenBright(solution));
  console.log("");
};

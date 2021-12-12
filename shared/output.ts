import chalk from "chalk";

export const title = (day: number, part: number) => {
  console.clear();
  console.log(
    chalk.green.bold("🎄 Advent of Code 2021 - Day %s, Part %s 🎄"),
    day,
    part
  );
  console.log("");
};

export const solution = (
  solution: string | number,
  time?: [seconds: number, nanoseconds: number]
) => {
  console.log(chalk.green.dim("💡 Solution"), chalk.greenBright(solution));
  if (time) {
    console.log("");
    const [seconds, nanoseconds] = time;
    const milliseconds = nanoseconds / 1000000;

    if (seconds) {
      console.log(
        chalk.green.dim("⏲️  Execution time"),
        chalk.red(`${seconds} s`),
        chalk.red(`${milliseconds} ms`)
      );
    } else if (milliseconds > 100) {
      console.log(
        chalk.green.dim("⏲️  Execution time"),
        chalk.yellow(`${milliseconds} ms`)
      );
    } else {
      console.log(
        `⏲️  ${chalk.green.dim("Execution time")} ${chalk.greenBright(
          "%d"
        )} ${chalk.green("ms")}`,
        milliseconds
      );
    }
  }
  console.log("");
};
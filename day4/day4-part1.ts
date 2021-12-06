import { BingoBoard, input } from "./data";
import { solution, title } from "../shared/output";

import { additionReducer } from "../shared/helpers";
import chalk from "chalk";

title(4, 1);

const { boards, numbers } = input;

const renderBoard = (board: BingoBoard, picked: number[]): void => {
  board.forEach((row) => {
    const columnMapper = (col: number) => {
      const value = `${col}`.padStart(2, " ");
      return picked.includes(col) ? chalk.yellow(value) : value;
    };
    picked;
    const cols = row.map(columnMapper).join(" ");
    console.log(cols);
  });
  console.log("");
};

const checkBoard = (board: BingoBoard, numbers: number[]): boolean => {
  const checkNumbers = (value: number): boolean => numbers.includes(value);
  for (let i = 0; i < 5; i += 1) {
    if (board[i].every(checkNumbers)) {
      return true;
    }
    if (board.map((row1) => row1[i]).every(checkNumbers)) {
      return true;
    }
  }
  return false;
};

const drawNumbers = (input: number[], boards: BingoBoard[]): number => {
  let lastDrawn;
  let drawnNumbers: number[] = [];
  let winner: BingoBoard;
  let score = -1;
  input.some((_value, index, array) => {
    drawnNumbers = array.slice(0, index);
    if (drawnNumbers.length) {
      boards.some((board) => {
        if (checkBoard(board, drawnNumbers)) {
          renderBoard(board, drawnNumbers);
          lastDrawn = [...drawnNumbers].pop() || 0;
          winner = board;
          const restSum = board
            .flat()
            .filter((value) => !drawnNumbers.includes(value))
            .reduce(additionReducer, 0);

          if (restSum && lastDrawn) {
            score = restSum * lastDrawn;
          }
          return true;
        }
      });
    }
    return !!winner;
  });
  console.log("Last drawn", lastDrawn);
  console.log("");
  return score;
};

const score = drawNumbers(numbers, boards);
if (score) {
  solution(score);
}

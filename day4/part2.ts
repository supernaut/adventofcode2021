import { BingoBoard, input } from "./data";
import { additionReducer, nullFilter } from "../shared/helpers";
import { solution, title } from "../shared/output";

import chalk from "chalk";

title(4, 2);

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
  for (let i = 0; i < board.length; i += 1) {
    if (board[i].every(checkNumbers)) {
      return true;
    }
    if (board.map((row) => row[i]).every(checkNumbers)) {
      return true;
    }
  }
  return false;
};

const calculateScore = (board: BingoBoard, drawnNumbers: number[]): number => {
  const lastDrawn = [...drawnNumbers].pop() || 0;
  const restSum = board
    .flat()
    .filter((value) => !drawnNumbers.includes(value))
    .reduce(additionReducer, 0);

  return restSum && lastDrawn ? restSum * lastDrawn : 0;
};

const drawNumbers = (input: number[], boards: BingoBoard[]): number => {
  let drawnNumbers: number[] = [];
  const winners: { board: BingoBoard; numbers: number[] }[] = [];
  input.forEach((_value, index, array) => {
    drawnNumbers = array.slice(0, index + 1);

    boards.forEach((board) => {
      if (
        !winners.filter((winner) => winner.board === board).length &&
        checkBoard(board, drawnNumbers)
      ) {
        winners.push({ board, numbers: drawnNumbers });
      }
    });
  });

  const lastWinner = [...winners].pop();
  if (lastWinner) {
    renderBoard(lastWinner.board, lastWinner.numbers);
    return calculateScore(lastWinner.board, lastWinner.numbers);
  } else {
    return 0;
  }
};

const score = drawNumbers(numbers, boards);

solution(score);

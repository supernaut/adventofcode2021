const fs = require("fs");
const path = require("path");
const data = fs.readFileSync(path.resolve(__dirname, "input"), "utf8");

const values = [];

const rows = data.split("\n").filter((row) => !!row);

rows.forEach((row) => {
  row
    .split("")
    .map((value) => parseInt(value, 10))
    .forEach((digit, index) => {
      values[index] = digit + (values[index] || 0);
    });
});

const getValue = (a, b) =>
  parseInt(
    values.map((value) => (value / rows.length > 0.5 ? a : b)).join(""),
    2
  );

const gamma = getValue(1, 0);

const epsilon = getValue(0, 1);

console.log(gamma * epsilon);

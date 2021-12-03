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

const binary = values
  .map((value) => (value / rows.length > 0.5 ? 1 : 0))
  .join("");

const gamma = parseInt(binary, 2);

const epsilon = ~gamma + Math.pow(2, binary.length);

console.log(gamma * epsilon);

const fs = require("fs");
const path = require("path");
const data = fs.readFileSync(path.resolve(__dirname, "input"), "utf8");

const values = [];

const rows = data.split("\n").filter((row) => !!row);

rows.forEach((row, index, array) => {
  length = array.length;
  const digits = row.split("").map((value) => parseInt(value, 10));
  for (let i = 0; i < digits.length; i += 1) {
    values[i] = digits[i] + (values[i] || 0);
  }
});

const gamma = parseInt(
  values.map((value) => (value / rows.length > 0.5 ? 1 : 0)).join(""),
  2
);

const epsilon = parseInt(
  values.map((value) => (value / rows.length > 0.5 ? 0 : 1)).join(""),
  2
);

console.log(gamma * epsilon);

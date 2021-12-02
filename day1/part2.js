const data = require("./data");

const calculateIncreases = require("./calculateIncreases");

console.log(
  calculateIncreases(
    data.map((_row, index, all) =>
      all.slice(index, index + 3).reduce((a, b) => a + b, 0)
    )
  )
);

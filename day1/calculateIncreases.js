module.exports = (values) =>
  values
    .filter((row) => !!row)
    .map((row) => parseInt(row, 10))
    .map((value, index, all) => value > all[index - 1] || 0)
    .reduce((a, b) => a + b, 0);

module.exports = (values) =>
  values
    .map((value, index, all) => (value > all[index - 1] ? 1 : 0))
    .reduce((a, b) => a + b, 0);

module.exports = (values) => {
  let increases = 0;

  values
    .filter((row) => !!row)
    .map((row, index, all) => {
      if (parseInt(`${row}`, 10) > parseInt(all[index - 1])) {
        increases += 1;
      }
    });

  return increases;
};

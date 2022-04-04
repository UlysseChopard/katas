const parseDelimiter = (input) => {
  const delimiter = numbers.match(/\/\/(.)\n/g);
  if (delimiter.length) {
    input = input.replace(newDelimiter[0], '');
    input = input.replaceAll(newDelimiter[1], ',');
  }
  return input;
};

module.exports = (numbers) => {
  return numbers
    .replace('\n', ',')
    .split(',')
    .reduce((acc, val) => (acc += Number(val)), 0);
};

const parseInput = (string) => {
  const delimitersDefinition = string.match(/[\/]{2}(.+)\n/);
  if (delimitersDefinition && delimitersDefinition[0]) {
    // Suppression du motif de définition des délimiteurs
    string = string.slice(delimitersDefinition[0].length);
    const delimiters = [];
    if (delimitersDefinition[1].length === 1) {
      // Motif delimiteur d d'un caractère: //d\n
      delimiters.push(delimitersDefinition[1]);
    } else {
      // Motif delimiteurs d1 d2 d3 de longueur variable : //[d1][d2][d3]\n
      const delimitersIterator =
        delimitersDefinition[1].matchAll(/\[([^\]]+)\]/g);
      for (const [, delimiter] of delimitersIterator) {
        delimiters.push(delimiter);
      }
    }
    delimiters.forEach(
      (delimiter) => (string = string.replaceAll(delimiter, ","))
    );
  }
  return string
    .replaceAll("\n", ",")
    .split(",")
    .filter((num) => num <= 1000);
};

module.exports = (numbers) => {
  const normalizedArr = parseInput(numbers);
  const negatives = normalizedArr.filter((num) => num < 0);
  if (negatives?.length) {
    throw new Error(`negatives numbers not allowed ${negatives.join(", ")}`);
  }
  return normalizedArr.reduce((acc, val) => (acc += Number(val)), 0);
};

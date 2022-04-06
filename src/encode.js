module.exports = (text) => {
  let prev;
  return [...text]
    .reduce((encoded, letter) => {
      if (letter !== prev) {
        encoded.push({ letter, count: 1 });
      } else {
        encoded[encoded.length - 1].count++;
      }
      prev = letter;
      return encoded;
    }, [])
    .map((obj) => `${obj.count}${obj.letter}`)
    .join("");
};

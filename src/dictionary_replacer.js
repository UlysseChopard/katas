module.exports = (sentence, dictionary) => {
  let answer = sentence;
  Object.entries(dictionary).forEach(([k, v]) => {
    const pattern = new RegExp(`\\$${k}\\$`, "g");
    answer = answer.replace(pattern, v);
  });
  return answer;
};

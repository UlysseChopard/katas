exports.stageOne = (num) => {
  if (!(num % 3) && !(num % 5)) {
    console.log("FizzBuzz");
  } else if (!(num % 3)) {
    console.log("Fizz");
  } else if (!(num % 5)) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
};

exports.stageTwo = (num) => {
  const stringValue = num.toString();
  if (!(num % 3) && !(num % 5)) {
    console.log("FizzBuzz");
  } else if (!(num % 3) || stringValue.includes("3")) {
    console.log("Fizz");
  } else if (!(num % 5) || stringValue.includes("5")) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
};

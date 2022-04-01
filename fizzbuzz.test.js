const fizzbuzz = require("./fizzbuzz");
const logSpy = jest.spyOn(console, "log");

test("non-fizzbuzz values", () => {
  fizzbuzz.stageOne(1);
  expect(logSpy).toHaveBeenCalledWith(1);
  fizzbuzz.stageOne(166);
  expect(logSpy).toHaveBeenCalledWith(166);
});

const add = require("./string_calculator");

test("Empty string", () => {
  const result = add("");
  expect(result).toBe(0);
});

test("One number", () => {
  const result = add("1");
  expect(result).toBe(1);
});

test("Two numbers", () => {
  const result = add("1,2");
  expect(result).toBe(3);
});

test("Many numbers", () => {
  const result = add("1,2,3,4");
  expect(result).toBe(10);
});

test("Includes new lines character", () => {
  const result = add("1\n2,3");
  expect(result).toBe(6);
});

test("New delimiter", () => {
  const result = add("//;\n1;2");
  expect(result).toBe(3);
});

test("Fails with one negative number", () => {
  expect(() => add("-1,1")).toThrow("negatives numbers not allowed -1");
});

test("Fails with many negatives number", () => {
  expect(() => add("-1,-2,-3")).toThrow(
    "negatives numbers not allowed -1, -2, -3"
  );
});

test("Ignore numbers highers than 1000", () => {
  const result = add("2,1001");
  expect(result).toBe(2);
});

test("Allow delimiters of any length", () => {
  const result = add("//[***]\n1***2***3");
  expect(result).toBe(6);
});

test("Allow multiple delimiters", () => {
  const result = add("//[*][%]\n1*2%3");
  expect(result).toBe(6);
});

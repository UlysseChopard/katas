const encode = require("./encode");

test("aaabccaa", () => {
  const result = encode("aaabccaa");
  expect(result).toBe("3a1b2c2a");
});

test("a", () => {
  const result = encode("a");
  expect(result).toBe("1a");
});

test("abbcccddddeeeee", () => {
  const result = encode("abbcccddddeeeee");
  expect(result).toBe("1a2b3c4d5e");
});

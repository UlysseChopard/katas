const dictionaryReplace = require("./dictionary_replacer");

test("Empty input", () => {
  const result = dictionaryReplace("", {});
  expect(result).toBe("");
});

test("Single input", () => {
  const result = dictionaryReplace("$temp$", { temp: "temporary" });
  expect(result).toBe("temporary");
});

test("Multiple input", () => {
  const result = dictionaryReplace("$temp$ here comes the $name$", {
    temp: "temporary",
    name: "John Doe",
  });
  expect(result).toBe("temporary here comes the John Doe");
});

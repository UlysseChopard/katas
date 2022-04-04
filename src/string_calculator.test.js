const { rules } = require('@typescript-eslint/eslint-plugin');
const add = require('./string_calculator');

test('Empty string', () => {
  const result = add('');
  expect(result).toBe(0);
});

test('One number', () => {
  const result = add('1');
  expect(result).toBe(1);
});

test('Two numbers', () => {
  const result = add('1,2');
  expect(result).toBe(3);
});

test('Many numbers', () => {
  const result = add('1,2,3,4');
  expect(result).toBe(10);
});

test('Includes new lines character', () => {
  const result = add('1\n2,3');
  expect(result).toBe(6);
});

test.only('New delimiter', () => {
  const result = add('//;\n1;2');
  expect(result).toBe(3);
});

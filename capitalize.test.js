import capitalize from "./capitalize";

test('Capitalize a word', () => {
  expect(capitalize('hey')).toBe('Hey');
});

test('Capitalize a sentence', () => {
  expect(capitalize('hey, you.')).toBe('Hey, you.');
});

test('Throw error if parameter is not a string', () => {
  function testError() {
    capitalize(123);
  }
  expect(capitalize).toThrow();
});

console.log();

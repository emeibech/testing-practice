/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import capitalize from '../modules/capitalize';

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

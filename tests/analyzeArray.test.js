/* eslint-disable no-undef */
import analyzeArray from '../modules/analyzeArray';

test('Return object with min, max, avg, and length', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('Accept negative values', () => {
  expect(analyzeArray([22, -56, 13, 45, -64])).toStrictEqual({
    average: -8,
    min: -64,
    max: 45,
    length: 5,
  });
});

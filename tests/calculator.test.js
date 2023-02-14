/* eslint-disable no-undef */
import calculator from '../modules/calculator';

test('Add two numbers', () => {
  expect(calculator.add(3, 2)).toBe(5);
});

test('Subtract two numbers', () => {
  expect(calculator.subtract(6, 4)).toBe(2);
});

test('Multiply two numbers', () => {
  expect(calculator.multiply(4, 2)).toBe(8);
});

test('Divide two numbers', () => {
  expect(calculator.divide(10, 5)).toBe(2);
});

test('Round to the nearest hundredth', () => {
  expect(calculator.add(3.14159, 2)).toBe(5.14);
  expect(calculator.subtract(6.23, 4.941)).toBe(1.29);
  expect(calculator.multiply(2.71828, 3.14159)).toBe(8.54);
  expect(calculator.divide(5, 3)).toBe(1.67);
});

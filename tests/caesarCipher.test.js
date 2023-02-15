/* eslint-disable no-undef */
import caesarCipher from '../modules/caesarCipher';

test('Encipher string', () => {
  expect(caesarCipher('hey', 1)).toBe('ifz');
});

test('Negative shift factor', () => {
  expect(caesarCipher('yo', -3)).toBe('vl');
});

test('Wrap z to a and viceversa', () => {
  expect(caesarCipher('aztec', 1)).toBe('baufd');
  expect(caesarCipher('zealot', -1)).toBe('ydzkns');
  expect(caesarCipher('aztec', 13)).toBe('nmgrp');
  expect(caesarCipher('zealot', -13)).toBe('mrnybg');
});

test('Keep the same case', () => {
  expect(caesarCipher('HeLLo', 1)).toBe('IfMMp');
});

test('Ignore punctuations', () => {
  expect(caesarCipher('$Hi!', 1)).toBe('$Ij!');
});

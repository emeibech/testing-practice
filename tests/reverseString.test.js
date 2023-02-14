/* eslint-disable no-undef */

import reverseString from '../modules/reverseString';

test('Reverse string', () => {
  expect(reverseString('hey')).toBe('yeh');
  expect(reverseString('yo')).toBe('oy');
});

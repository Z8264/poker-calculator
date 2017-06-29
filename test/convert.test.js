const { convert } = require('../');

test('toNumber A HEART', () => {
  expect(convert('A', 'HEART')).toBe(1);
});

test('toNumber 5 CLUB', () => {
  expect(convert('5', 'C')).toBe(18);
});

test('toNumber K DIAMOND', () => {
  expect(convert('K', '♦')).toBe(39);
});

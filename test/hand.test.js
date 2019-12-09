const { hand } = require('../lib');

/**
 * 7 cards
 */
test('Royal Flush in 7 cards', () => {
  const res = hand([23, 24, 14, 25, 26, 38, 37]);
  expect(res.type).toBe(10);
  expect(res.name).toBe('Royal Flush');
});


test('Straight Flush in 7 cards', () => {
  const res = hand([14, 2, 15, 16, 3, 17, 18]);
  expect(res.type).toBe(9);
  expect(res.name).toBe('Straight Flush');
});

test('Four Of A Kind in 7 cards', () => {
  const res = hand([3, 16, 29, 42, 1, 2, 4]);
  expect(res.type).toBe(8);
  expect(res.name).toBe('Four Of A Kind');
});

test('Full House in 7 cards', () => {
  const res = hand([13, 26, 39, 14, 27, 4, 5]);
  expect(res.type).toBe(7);
  expect(res.name).toBe('Full House');
});

test('Straight in 7 cards', () => {
  const res = hand([10, 24, 25, 39, 40, 4, 5]);
  expect(res.type).toBe(5);
  expect(res.name).toBe('Straight');
});

test('Three Of A Kind in 7 cards', () => {
  const res = hand([18, 31, 44, 20, 21, 36, 1]);
  expect(res.type).toBe(4);
  expect(res.name).toBe('Three Of A Kind');
});

test('Two Pair in 7 cards', () => {
  const res = hand([1, 14, 13, 26, 30, 31, 45]);
  expect(res.type).toBe(3);
  expect(res.name).toBe('Two Pair');
});

test('One Pair in 7 cards', () => {
  const res = hand([2, 41, 1, 18, 19, 36, 50]);
  expect(res.type).toBe(2);
  expect(res.name).toBe('One Pair');
});

test('High Card in 7 cards', () => {
  const res = hand([1, 16, 30, 44, 33, 21, 13]);
  expect(res.type).toBe(1);
  expect(res.name).toBe('High Card');
});

/**
 * 6 cards
 */
test('Royal Flush in 6 cards', () => {
  const res = hand([23, 24, 14, 25, 26, 38]);
  expect(res.type).toBe(10);
  expect(res.name).toBe('Royal Flush');
});

test('Two Pair in 6 cards', () => {
  const res = hand([1, 14, 13, 26, 30, 31]);
  expect(res.type).toBe(3);
  expect(res.name).toBe('Two Pair');
});

test('One Pair in 6 cards', () => {
  const res = hand([2, 41, 1, 18, 19, 36]);
  expect(res.type).toBe(2);
  expect(res.name).toBe('One Pair');
});

test('High Card in 6 cards', () => {
  const res = hand([1, 16, 30, 44, 33, 21]);
  expect(res.type).toBe(1);
  expect(res.name).toBe('High Card');
});
/**
 * 5 cards
 */
test('Royal Flush in 5 cards', () => {
  const res = hand([23, 24, 14, 25, 26]);
  expect(res.type).toBe(10);
  expect(res.name).toBe('Royal Flush');
});


test('Two Pair in 5 cards', () => {
  const res = hand([1, 14, 13, 26, 30]);
  expect(res.type).toBe(3);
  expect(res.name).toBe('Two Pair');
});

test('One Pair in 5 cards', () => {
  const res = hand([2, 41, 1, 18, 19]);
  expect(res.type).toBe(2);
  expect(res.name).toBe('One Pair');
});

test('High Card in 5 cards', () => {
  const res = hand([1, 16, 30, 44, 33]);
  expect(res.type).toBe(1);
  expect(res.name).toBe('High Card');
});

const {
  getRankValue, sortByRankValue, getMaxStraight, getSameSuits, groupByRankValue,
} = require('../src/utils');

/**
 * getRankValue
 */
test('getRankValue 24', () => {
  const res = getRankValue(24);
  expect(res).toEqual(11);
});

test('getRankValue 26', () => {
  const res = getRankValue(26);
  expect(res).toBe(13);
});

/**
 * sortByRankValue
 */
test('sort by RankValue', () => {
  const res = sortByRankValue([1, 4, 5, 13, 24, 52]);
  expect(res).toEqual([13, 52, 24, 5, 4, 1]);
});

/**
 * getMaxStraight
 */

test('getMaxStraight', () => {
  const res = getMaxStraight([13, 12, 11, 10, 8, 7, 1]);
  expect(res).toEqual([1, 13, 12, 11, 10]);
});

test('getMaxStraight', () => {
  const res = getMaxStraight([13, 12, 5, 30, 3, 2, 1]);
  expect(res).toEqual([5, 30, 3, 2, 1]);
});

/**
 * getSameSuits
 */

test('getSameSuits', () => {
  const res = getSameSuits([20, 19, 18, 17, 16, 2, 1]);
  expect(res).toEqual([20, 19, 18, 17, 16]);
});

/**
 * groupByRankValue
 */
test('groupByRankValue', () => {
  const res = groupByRankValue([17, 30, 43, 16, 28, 40, 1]);
  expect(res).toEqual([[40, 1], [17, 30, 43], [16], [28]]);
});

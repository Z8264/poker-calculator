const { getRank, getSuit, getSuitSymbol } = require('../');

test('getSuitSymbol & getRank 1~13', () => {
  const res = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((card) => `${getSuitSymbol(card)}${getRank(card)}`);
  expect(res).toEqual(['♥A', '♥2', '♥3', '♥4', '♥5', '♥6', '♥7', '♥8', '♥9', '♥10', '♥J', '♥Q', '♥K']);
});

test('getSuitSymbol & getRank 14~26', () => {
  const res = [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26].map((card) => `${getSuitSymbol(card)}${getRank(card)}`);
  expect(res).toEqual(['♣A', '♣2', '♣3', '♣4', '♣5', '♣6', '♣7', '♣8', '♣9', '♣10', '♣J', '♣Q', '♣K']);
});

test('getSuitSymbol & getRank 27~39', () => {
  const res = [27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39].map((card) => `${getSuitSymbol(card)}${getRank(card)}`);
  expect(res).toEqual(['♦A', '♦2', '♦3', '♦4', '♦5', '♦6', '♦7', '♦8', '♦9', '♦10', '♦J', '♦Q', '♦K']);
});

test('getSuitSymbol & getRank 40~52', () => {
  const res = [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52].map((card) => `${getSuitSymbol(card)}${getRank(card)}`);
  expect(res).toEqual(['♠A', '♠2', '♠3', '♠4', '♠5', '♠6', '♠7', '♠8', '♠9', '♠10', '♠J', '♠Q', '♠K']);
});


test('getSuit 1~13', () => {
  const res = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((card) => getSuit(card));
  expect(res).toEqual(['HEART', 'HEART', 'HEART', 'HEART', 'HEART', 'HEART', 'HEART', 'HEART', 'HEART', 'HEART', 'HEART', 'HEART', 'HEART']);
});

test('getSuit 14~26', () => {
  const res = [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26].map((card) => getSuit(card));
  expect(res).toEqual(['CLUB', 'CLUB', 'CLUB', 'CLUB', 'CLUB', 'CLUB', 'CLUB', 'CLUB', 'CLUB', 'CLUB', 'CLUB', 'CLUB', 'CLUB']);
});

test('getSuit 27~39', () => {
  const res = [27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39].map((card) => getSuit(card));
  expect(res).toEqual(['DIAMOND', 'DIAMOND', 'DIAMOND', 'DIAMOND', 'DIAMOND', 'DIAMOND', 'DIAMOND', 'DIAMOND', 'DIAMOND', 'DIAMOND', 'DIAMOND', 'DIAMOND', 'DIAMOND']);
});

test('getSuit 40~52', () => {
  const res = [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52].map((card) => getSuit(card));
  expect(res).toEqual(['SPADE', 'SPADE', 'SPADE', 'SPADE', 'SPADE', 'SPADE', 'SPADE', 'SPADE', 'SPADE', 'SPADE', 'SPADE', 'SPADE', 'SPADE']);
});

const {
  getRankValue, sortByRankValue, getMaxStraight, getSameSuits, groupByRankValue, toValue,
} = require('./utils');

module.exports = (cards) => {
  sortByRankValue(cards);

  const suits = getSameSuits(cards);
  if (suits) {
    const straigthFlush = getMaxStraight(suits);
    if (straigthFlush) return toValue(getRankValue(straigthFlush[0]) === 1 ? 10 : 9, straigthFlush);

    return toValue(
      6,
      getRankValue(suits[suits.length - 1]) === 1
        ? suits.unshift(suits.pop()).slice(0, 5)
        : suits.slice(0, 5),
    );
  }

  const straigth = getMaxStraight(cards);
  if (straigth) return toValue(5, straigth);

  const groups = groupByRankValue(cards);
  const four = [[], []];
  const full = [[], []];
  const three = [[], []];
  const two = [[], []];
  const one = [[], []];

  groups.forEach((group) => {
    switch (group.length) {
      case 4:
        four[0].push(...group);
        break;
      case 3:
        if (!full[0].length) full[0].push(...group);
        else full[1].push(...group);
        if (!three[0].length) three[0].push(...group);
        break;
      case 2:
        full[1].push(...group);
        three[1].push(...group);
        if (two[0].length < 4) two[0].push(...group);
        else two[1].push(...group);
        if (!one[0].lenght) one[0].push(...group);
        break;
      default:
        four[1].push(...group);
        three[1].push(...group);
        two[1].push(...group);
        one[1].push(...group);
    }
  });

  if (four[0].length) return toValue(8, [...four[0], four[1][0]]);
  if (full[0].length && full[1].length) return toValue(7, [...full[0], ...full[1].slice(0, 2)]);
  if (three[0].length) return toValue(4, [...three[0], ...three[1].slice(0, 2)]);
  if (two[0].length === 4) return toValue(3, [...two[0], two[1][0]]);
  if (one[0].length) return toValue(2, [...one[0], ...one[1].slice(0, 3)]);
  return toValue(1, cards.slice(0, 5));
};

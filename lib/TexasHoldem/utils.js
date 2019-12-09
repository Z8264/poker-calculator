
const getRankValue = (card) => card % 13 || 13;

const sortByRankValue = (cards) => cards.sort((a, b) => getRankValue(b) - getRankValue(a));

const getMaxStraight = (cards) => {
  let res = [];
  if (getRankValue(cards[cards.length - 1]) === 1 && getRankValue(cards[0]) === 13) {
    res.push(cards[cards.length - 1]);
  }
  res.push(cards[0]);
  for (let i = 1; i < cards.length; i += 1) {
    if (getRankValue(res[res.length - 1]) !== getRankValue(cards[i])) {
      if (res.length && getRankValue(res[res.length - 1]) - getRankValue(cards[i]) !== 1) res = [];
      res.push(cards[i]);
      if (res.length === 5) return res;
    }
  }
  return false;
};

const getSameSuits = (cards) => {
  const suits = [[], [], [], []];
  for (let i = 0; i < cards.length; i += 1) {
    suits[Math.ceil(cards[i] / 13) - 1].push(cards[i]);
  }
  for (let i = 0; i < suits.length; i += 1) {
    if (suits[i].length >= 5) return suits[i];
  }
  return false;
};

const groupByRankValue = (cards) => {
  const groups = [];
  let group = [];
  for (let i = 0; i < cards.length; i += 1) {
    if (!group.length || getRankValue(cards[i]) === getRankValue(group[0])) {
      group.push(cards[i]);
    } else {
      groups.push(group);
      group = [cards[i]];
    }
  }
  groups.push(group);

  if (getRankValue(groups[groups.length - 1][0]) === 1) groups.unshift(groups.pop());

  return groups;
};

const toValue = (type, cards) => {
  const value = type * 1000000 + parseInt(cards.map((card) => {
    const r = getRankValue(card);
    return r === 1 ? 'd' : r.toString(14);
  }).join(''), 14);

  const names = {
    10: 'Royal Flush',
    9: 'Straight Flush',
    8: 'Four Of A Kind',
    7: 'Full House',
    6: 'Flush',
    5: 'Straight',
    4: 'Three Of A Kind',
    3: 'Two Pair',
    2: 'One Pair',
    1: 'High Card',
  };

  return {
    type,
    cards,
    value,
    name: names[type],
  };
};

module.exports = {
  getRankValue, sortByRankValue, getMaxStraight, getSameSuits, groupByRankValue, toValue,
};

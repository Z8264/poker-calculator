const getSuit = (card) => ['HEART', 'CLUB', 'DIAMOND', 'SPADE'][Math.ceil(card / 13) - 1];
module.exports = getSuit;

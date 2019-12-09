const getSuitSymbol = (card) => ['♥', '♣', '♦', '♠'][Math.ceil(card / 13) - 1];
module.exports = getSuitSymbol;

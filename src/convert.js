const convert = (rank, suit) => {
  let n = 0;
  switch (rank.toString().toUpperCase()) {
    case 'A': n = 1; break;
    case 'T':
    case '10': n = 10; break;
    case 'J': n = 11; break;
    case 'Q': n = 12; break;
    case 'K': n = 13; break;
    default:
      n = parseInt(rank, 10);
  }
  let s = 0;
  switch (true) {
    case ['HEART', '♥', 'H'].includes(suit.toUpperCase()):
      s = 0; break;
    case ['CLUB', '♣', 'C'].includes(suit.toUpperCase()):
      s = 1; break;
    case ['DIAMOND', '♦', 'D'].includes(suit.toUpperCase()):
      s = 2; break;
    case ['SPADE', '♠', 'S'].includes(suit.toUpperCase()):
      s = 3; break;
    default:
  }
  return s * 13 + n;
};

module.exports = convert;

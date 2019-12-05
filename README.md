
# Poker Calculator

Poker Calculator

## Install

```
npm i poker-calculator
```

## Getting Started

```
const PokerCalculator = require('poker-calculator');

PokerCalculator.hand([1, 2, 3, 4, 5, 6, 7]);

// {
//    type: 9,
//    cards: [7, 6, 5, 4, 3],
//    value: 9286415,
//    name: 'Straight Flush',
// }
```

## Poker Data Types

### Rank

| Rank |   A   |   2   |   3   |   4   |   5   |   6   |   7   |   8   |   9   |  10   |   J   |   Q   |   K   |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |

### Suit

| Name    | Symbol | Abbreviation |
| :------ | :----: | :----------: |
| HEART   |   ♥    |      H       |
| CLUB    |   ♣    |      C       |
| DIAMOND |   ♦    |      D       |
| SPADE   |   ♠    |      S       |

### Card

Use **Numbers** to represent playing cards

| Suit/Rank |   A   |   2   |   3   |   4   |   5   |   6   |   7   |   8   |   9   |  10   |   J   |   Q   |   K   |
| :-------- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| HEART     |   1   |   2   |   3   |   4   |   5   |   6   |   7   |   8   |   9   |  10   |  11   |  12   |  13   |
| CLUB      |  14   |  15   |  16   |  17   |  18   |  19   |  20   |  21   |  22   |  23   |  24   |  25   |  26   |
| DIAMOND   |  27   |  28   |  29   |  30   |  31   |  32   |  33   |  34   |  35   |  36   |  37   |  38   |  39   |
| SPADE     |  40   |  41   |  42   |  43   |  44   |  45   |  46   |  47   |  48   |  49   |  50   |  51   |  52   |

### Hand Type

| Hand Type       | Number |    Chinese |
| :-------------- | :----: | ---------: |
| Royal Flush     |   10   | 皇家同花顺 |
| Straight Flush  |   9    |     同花顺 |
| Four Of A Kind  |   8    |       四条 |
| Full House      |   7    |       葫芦 |
| Flush           |   6    |       同花 |
| Straight        |   5    |       顺子 |
| Three Of A Kind |   4    |       三条 |
| Two Pair        |   3    |       两对 |
| One Pair        |   2    |       一对 |
| High Card       |   1    |       高牌 |

## APIs

### Common Methods

| Methods       | Description |
| :------------ | :---------- |
| convert       |             |
| getRank       |             |
| getSuit       |             |
| getSuitSymbol |             |

#### `convert(rank, suit)`

``` js
PokerCalculator.convert('A', 'HEART');
// 1

PokerCalculator.convert('5', 'C'); 
// 18

PokerCalculator.convert('K', '♦'); 
// 39
```

#### `getRank(Number)`

``` js
PokerCalculator.getRank(13);
// "K"
```

#### `getSuit(Number)`

``` js
PokerCalculator.getSuit(13);
// "HEART"
```

#### `getSuitSymbol(Number)`

``` js
PokerCalculator.getSuitSymbol(13) 
// "♥"
```

### Texas Hold’em Methods

| Methods | Description |
| :------ | :---------- |
| hand    |             |

#### `hand([Number, Number, ...])`

| @return | Description |
| :------ | :---------- |
| type    |             |
| cards   |             |
| value   |             |
| name    |             |

``` js
PokerCalculator.hand([1, 2, 3, 4, 5, 6, 7]);
// {
//    type: 9,
//    cards: [7, 6, 5, 4, 3],
//    value: 9286415,
//    name: 'Straight Flush',
// }

PokerCalculator.hand([17, 30, 43, 20, 26, 34, 39]);
// {
//    type: 7,
//    cards: [17, 30, 43, 26, 39],
//    value: 7165619,
//    name: 'Full House',
// }
```

## License

[MIT](http://opensource.org/licenses/MIT)

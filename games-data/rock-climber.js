const linesPositions = [
  [
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
  ],
  [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
  ],
  [
    [0, 0, 1, 0],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 1, 0],
  ],
  [
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
  ],
  [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
  ],
  [
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
  ],
  [
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
  ],
  [
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ],
  [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
  ],
];

const symbolsMultipliers = {
  1: [
    {
      count: 3,
      multiplier: 2,
    },
    {
      count: 4,
      multiplier: 3,
    },
    {
      count: 5,
      multiplier: 4,
    },
  ],
  2: [
    {
      count: 3,
      multiplier: 2,
    },
    {
      count: 4,
      multiplier: 3,
    },
    {
      count: 5,
      multiplier: 4,
    },
  ],
  3: [
    {
      count: 3,
      multiplier: 3,
    },
    {
      count: 4,
      multiplier: 4,
    },
    {
      count: 5,
      multiplier: 5,
    },
  ],
  4: [
    {
      count: 3,
      multiplier: 3,
    },
    {
      count: 4,
      multiplier: 4,
    },
    {
      count: 5,
      multiplier: 5,
    },
  ],
  5: [
    {
      count: 3,
      multiplier: 7,
    },
    {
      count: 4,
      multiplier: 11,
    },
    {
      count: 5,
      multiplier: 16,
    },
  ],
  6: [
    {
      count: 3,
      multiplier: 7,
    },
    {
      count: 4,
      multiplier: 12,
    },
    {
      count: 5,
      multiplier: 17,
    },
  ],
  7: [
    {
      count: 3,
      multiplier: 8,
    },
    {
      count: 4,
      multiplier: 13,
    },
    {
      count: 5,
      multiplier: 19,
    },
  ],
  8: [
    {
      count: 3,
      multiplier: 9,
    },
    {
      count: 4,
      multiplier: 16,
    },
    {
      count: 5,
      multiplier: 21,
    },
  ],
};

module.exports = {
  reelsCount: 5,
  reelPositions: 3,
  symbolsCount: 8,
  linesPositions,
  symbolsMultipliers,
};

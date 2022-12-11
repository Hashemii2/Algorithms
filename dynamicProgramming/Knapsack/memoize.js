function memoizeKnapsack(W, weights, values) {
  let cache = [];

  for (let row = 0; row < weights.length + 1; row++) {
    cache[row] = [];
    for (let column = 0; column < W + 1; column++) {
      cache[row][column] = 0;
    }
  }

  for (let i = 0; i < weights.length + 1; i++) {
    for (let j = 0; j < W + 1; j++) {
      if (i == 0 || j == 0) cache[i][j] = 0;
      else if (weights[i - 1] <= j) {
        let included = values[i - 1] + cache[i - 1][j - weights[i - 1]];
        let excluded = cache[i - 1][j];

        cache[i][j] = Math.max(included, excluded);
      } else cache[i][j] = cache[i - 1][j];
    }
  }

  return cache[weights.length][W];
}

let values = [100, 60, 120];
let weights = [10, 20, 30];
let W = 50;

console.log(memoizeKnapsack(W, weights, values));

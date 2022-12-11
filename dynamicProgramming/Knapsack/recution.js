function slowKnapSack(W, weights, values, n = values.length) {
  if (n == 0 || W == 0) return 0;
  if (weights[n - 1] > W) return slowKnapSack(W, weights, values, n - 1);
  else
    return Math.max(
      values[n - 1] + slowKnapSack(W - weights[n - 1], weights, values, n - 1),
      slowKnapSack(W, weights, values, n - 1)
    );
}

let values = [100, 60, 120];
let weights = [10, 20, 30];
let W = 50;

console.log(slowKnapSack(W, weights, values));

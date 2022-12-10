/*
There is a single constraint to this problem, you cannot break an item, 
either pick the complete item or don’t pick it (0-1 property). 

There is another variation of this known as fractional knapsack where 
you can break the items.
*/

//Solution1;
// function Knapsack(values, weights, target) {
//   let result = 0,
//     totalWeight = 0,
//     len = values.length;

//   for (let i = 0; i < len; i++) {
//     const index = values.indexOf(Math.max(...values));

//     if (totalWeight + weights[index] <= target) {
//       result += values[index];
//       totalWeight += weights[index];
//     }
//     values.splice(index, 1);
//     weights.splice(index, 1);
//   }

//   return result;
// }

// let values = [10, 20, 30];
// let weights = [1, 1, 1];
// let W = 3;

let values = [100, 60, 120];
let weights = [10, 20, 30];
let W = 50;

//Slow Solution/recurtion
// function slowKnapSack(W, weights, values, n = values.length) {
//   if (n == 0 || W == 0) return 0;
//   if (weights[n - 1] > W) return slowKnapSack(W, weights, values, n - 1);
//   else
//     return Math.max(
//       values[n - 1] + slowKnapSack(W - weights[n - 1], weights, values, n - 1),
//       slowKnapSack(W, weights, values, n - 1)
//     );
// }

// console.log(slowKnapSack(W, weights, values));

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

console.log(memoizeKnapsack(W, weights, values));

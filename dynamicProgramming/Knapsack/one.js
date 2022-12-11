function Knapsack(values, weights, target) {
  let result = 0,
    totalWeight = 0,
    len = values.length;

  for (let i = 0; i < len; i++) {
    const index = values.indexOf(Math.max(...values));

    if (totalWeight + weights[index] <= target) {
      result += values[index];
      totalWeight += weights[index];
    }
    values.splice(index, 1);
    weights.splice(index, 1);
  }

  return result;
}

let values = [100, 60, 120];
let weights = [10, 20, 30];
let target = 50;

console.log(Knapsack(values, weights, target));

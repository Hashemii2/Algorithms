//implemention with for-loop

const fibonacci = (num) => {
  const arr = [0, 1];

  for (let i = 2; i <= num; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr.pop();
};

console.log(fibonacci(8));

// //implemention with recurtion, Before dynamic programming
function verySlowFibonacci(num) {
  if (num < 2) return num;

  return verySlowFibonacci(num - 1) + verySlowFibonacci(num - 2);
}

console.log(verySlowFibonacci(8));

//Use dynamic programming approach

function fastFib() {
  const cache = {};

  return function fib(num) {
    return num < 2
      ? num
      : cache[num]
      ? cache[num]
      : (cache[num] = fib(num - 1) + fib(num - 2));
  };
}

const fast = fastFib();
console.log(fast(180));

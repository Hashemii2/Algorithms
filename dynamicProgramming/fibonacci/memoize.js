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

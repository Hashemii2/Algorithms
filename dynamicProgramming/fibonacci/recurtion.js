function verySlowFibonacci(num) {
  if (num < 2) return num;

  return verySlowFibonacci(num - 1) + verySlowFibonacci(num - 2);
}

console.log(verySlowFibonacci(8));

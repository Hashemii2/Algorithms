function towerOfHanoi(n, from, to, aux) {
  if (n == 0) return;

  towerOfHanoi(n - 1, from, aux, to);

  console.log(
    'Move disk ' + n + ' from rod ' + from + ' to rod ' + to + '<br/>'
  );

  towerOfHanoi(n - 1, aux, to, from);
}

console.log(towerOfHanoi(3, 'A', 'C', 'B'));

//Output:

// Disk 1 moved from A to C
// Disk 2 moved from A to B
// Disk 1 moved from C to B
// Disk 3 moved from A to C
// Disk 1 moved from B to A
// Disk 2 moved from B to C
// Disk 1 moved from A to C

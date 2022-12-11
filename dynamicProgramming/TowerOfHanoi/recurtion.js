function towerOfHanoi(n, from, to, via) {
  if (n == 0) return;

  towerOfHanoi(n - 1, from, via, to);

  console.log('Disk ' + n + ' moved from ' + from + ' to ' + to);

  towerOfHanoi(n - 1, via, to, from);
}

towerOfHanoi(3, 'A', 'C', 'B');

//Output:

// Disk 1 moved from A to C
// Disk 2 moved from A to B
// Disk 1 moved from C to B
// Disk 3 moved from A to C
// Disk 1 moved from B to A
// Disk 2 moved from B to C
// Disk 1 moved from A to C

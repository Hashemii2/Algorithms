function floydWarshallAlgorithm(matrix) {
  for (let k = 0; k < matrix.length; k++) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        matrix[i][j] = Math.min(matrix[i][j], matrix[i][k] + matrix[k][j]);
      }
    }
  }

  return matrix;
}

let matrix = [
  [0, 3, Infinity, 7],
  [8, 0, 2, Infinity],
  [5, Infinity, 0, 1],
  [2, Infinity, Infinity, 0],
];

console.log(floydWarshallAlgorithm(matrix));

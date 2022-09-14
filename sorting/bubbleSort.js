function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (compare(arr, j)) {
        swap(arr, j);
      }
    }
  }
  return arr;
}

function compare(arr, j) {
  return arr[j] > arr[j + 1];
}

function swap(arr, j) {
  let first = arr[j];

  arr[j] = arr[j + 1];
  arr[j + 1] = first;
}

const res = bubbleSort([10, 1, 11, 9, 7, 0, 2, 5]);
console.log(res);

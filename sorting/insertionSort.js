//first implementation
function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let a = arr.slice(0, i + 1);

    let j = a.length;

    while (j > 0 && arr[j - 1] < arr[j - 2]) {
      let temp = arr[j - 1];

      arr[j - 1] = arr[j - 2];
      arr[j - 2] = temp;
      j--;
    }
  }
  return arr;
}

const res = insertionSort([10, 5, 0, 11, 9, 8, 3, 1, -1]);
console.log(res);

//second implemetation
function insertionSort2(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i],
      j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
}

const res2 = insertionSort2([10, 5, 0, 11, 9, 8, 3, 1, -1]);
console.log(res);

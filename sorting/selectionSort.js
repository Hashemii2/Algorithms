//first implementation
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = Infinity;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] < min && arr[j] < arr[j + 1]) {
        min = arr[j];
        arr[i] = min;
        arr[j] = first;
      } else if (arr[j + 1] < min && arr[j] > arr[j + 1]) {
        min = arr[j + 1];
        arr[i] = min;
        arr[j + 1] = first;
      }
    }
  }

  return arr;
}

//second implementation

function selectionSort2(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    let first = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }

    arr[i] = arr[min];
    arr[min] = first;
  }

  return arr;
}

const res = selectionSort2([10, 5, 0, 11, 9, 8, 3, 1, -1]);
console.log(res);

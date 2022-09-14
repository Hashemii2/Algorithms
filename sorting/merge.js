function mergeSort(arr) {
  if (arr.length == 1) return arr;

  let left = arr.slice(0, Math.floor(arr.length / 2));
  let right = arr.slice(Math.floor(arr.length / 2));

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const res = mergeSort([10, 5, 0, 11, 9, 8, 3, 1, -1]);
console.log(res);

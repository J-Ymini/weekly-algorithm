function quickSort(arr, left = 0, right = arr.length - 1) {
  function pivotHelper(arr, start = 0, end = arr.length - 1) {
    function swap(array, i, j) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    let pivotElement = arr[start];

    let swapIndex = start;

    for (let i = start + 1; i < arr.length; i++) {
      if (pivotElement > arr[i]) {
        swapIndex++;
        swap(arr, swapIndex, i);
      }
    }

    swap(arr, start, swapIndex);

    return swapIndex;
  }

  if (left < right) {
    let pivotIndex = pivotHelper(arr, left, right); // 3

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

const arr = [4, 8, 2, 1, 5, 7, 6, 3];

quickSort(arr);

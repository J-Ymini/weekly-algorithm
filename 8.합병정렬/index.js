// 1. 배열 합병 구현하기
function merge(arr1, arr2) {
  let results = []; // 정렬된 result값
  let i = 0; // left의 index
  let j = 0; // right의 index

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      // 두 배열의 원소를 비교하여
      results.push(arr1[i]); // 더 작은 오른쪽 배열의 원소가 클 경우, 왼쪽 배열의 원소를 result에 추가
      i++;
    } else {
      results.push(arr2[j]); // 오른쪽 배열도 마찬가지이다.
      j++;
    }
  }
  return [...results, ...arr1.slice(i), ...arr2.slice(j)]; // 한쪽 배열의 원소가 더 많을 경우, 나머지를 그대로 넣는다.
}

// merge(first,second)

const array = [10, 24, 76, 73, 72, 1, 9];

function mergeSort(arr) {
  if (arr.length <= 1) {
    // 배열의 요소가 하나일 때, 그대로 반환
    return arr;
  }

  let midPoint = Math.floor(arr.length / 2); // 반으로 쪼개기 위한 index
  let leftSide = arr.slice(0, midPoint); // 반으로 쪼갠 왼쪽 배열
  let rightSide = arr.slice(midPoint); // 반으로 쪼갠 오른쪽 배열

  return merge(mergeSort(leftSide), mergeSort(rightSide)); // 재귀적으로 쪼개고 합치기
}

mergeSort(array);

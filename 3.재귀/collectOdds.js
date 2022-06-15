// helper method recursion
const collectOddValues = (arr) => {
  let result = [];

  const helper = (helperInput) => {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  };

  helper(arr);

  return result;
};

console.log(collectOddValues([1, 2, 3, 4])); // [1,3]

// pure recursion

const collectOddValues2 = (arr) => {
  let newArray = [];

  if (arr.length === 0) {
    return newArray;
  }

  if (arr[0] % 2 !== 0) {
    newArray.push(arr[0]);
  }

  newArray = newArray.concat(collectOddValues2(arr.slice(1)));
  return newArray;
};

console.log(collectOddValues2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [1,3,5,7,9]

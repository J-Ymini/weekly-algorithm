// 예제 직접 풀어보기

// 1. power(지수의 거듭제곱)

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

// 내 풀이
{
  function power(toNumber, powerNumber) {
    if (powerNumber === 0) {
      return 1;
    }

    return toNumber * power(toNumber, powerNumber - 1);
  }
}

// 솔루션 풀이(내 풀이와 동일)

//////////////////////////////////////////////////////

// 2. factorial(팩토리얼)

// factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040
// 내 풀이
{
  function factorial(number) {
    if (number === 0) {
      return 1;
    }

    return number * factorial(number - 1);
  }
}

// 솔루션 풀이
{
  function factorial(number) {
    if (x < 0) return 0; // number이 음수일때 경우를 생각 못했다.
    if (x <= 1) return 1;
    return number * factorial(number - 1);
  }
}

//////////////////////////////////////////////////////

// 3. productOfArray(배열 모든 수의 곱)
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// 내 풀이
{
  function productOfArray(arr) {
    let result = 1;

    function helper(newArr) {
      // 헬퍼 함수의 재귀문을 통해 풀었다.
      if (newArr.length === 0) {
        return;
      }
      result = result * newArr[0];
      helper(newArr.slice(1));
    }

    helper(arr);

    return result;
  }
}

// 솔루션 풀이
// 솔루션에서는, 순수 재귀 함수를 통해 풀이를 진행하였다.
{
  function productOfArray(arr) {
    if (arr.length === 0) {
      return 1;
    }

    return arr[0] + productOfArray(arr.slice(1));
  }
}

//////////////////////////////////////////////////////

// 4. recursiveRange(배열 모든 수의 합)
// recursiveRange(6) // 21
// recursiveRange(10) // 55

// 내 풀이
{
  function recursiveRange(number) {
    if (number === 0) {
      return 0;
    }
    return number + recursiveRange(number - 1);
  }
}

// 솔루션 풀이(동일)

//////////////////////////////////////////////////////

// 5. 피보나치 수열

// 솔루션 풀이
{
  function fib(n) {
    // 솔루션 풀이 수정: 0일때의 종료 조건이 존재하지 않아 추가하였다.
    if (n === 0) return 0;
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
  }
}

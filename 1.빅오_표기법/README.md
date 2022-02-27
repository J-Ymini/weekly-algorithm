# 빅오 표기법

### 들어가기 앞서, 더 나은 코드를 확인할 때 더 나은 것의 의미는 무엇인가?(어떻게 평가할 것인가?)

- 처리 시간이 더 짧은지?
- 적은 메모리를 사용하는지?
- 가독성이 충분히 확보가 되었는지?

<br/>

### 시간에 초점을 두고 평가하였을때

```javascript
// Time: 0.155 s

export const addUpToFirst = (number) => {
  let total = 0;

  for (let i = 1; i <= number; i++) {
    total += i;
  }

  return total;
};

// Time: 0.052 s

export const addUpToSecond = (number) => {
  return (number * (number + 1)) / 2;
};
```

- 위는 1부터 n까지의 합을 구하는 함수이다. 테스트로 확인해본 결과, 1억까지의 합을 도출하는데까지 약간의 시간 차이가 있음을 알 수 있다. 하지만 이러한 시간의 경우 기기의 사양에 따라 달라질 수도 있고, 혹은 같은 기기라도 시간이 다르게 측정될 수 있으며, 굉장히 빠른 알고리즘의 경우 연산 시간이 너무 빨라 정확하지 않을 수 있는 가능성이 있다. 그렇다면 시간을 측정하지 않고 어떤 코드가 더 나은 코드임들 평가할 수 있을까?

<br/>

### 연산 갯수 측정하기

- 시간을 측정하는 대신, 단순히 연산의 갯수를 세면 된다. 위의 함수 두개를 비교해보자

```javascript
// 연산이 매개변수에 비례하여 증가함
export const addUpToFirst = (number) => {
  let total = 0;

  for (let i = 1; i <= number; i++) {
    total += i;
  }

  return total;
};

// 전체적으로 연산은 *, +, / 이 3부분에서만 일어남
export const addUpToSecond = (number) => {
  return (number * (number + 1)) / 2;
};
```

- 위처럼 `for` 루프를 통해 구현한 함수는 매개변수에 따라 연산횟수가 비례하게 증가함을 알 수 있다. 여기서 특정 문제를 해결하는데 걸리는 시간과 입력한 함수 관계를 **시간복잡도**라고 표현하며, **연산의 횟수**로 수행 시간을 평가하게 된다. 이때 정확한 횟수에 집중하기 보다는 추세를 보는 것이 중요하다. (해당 함수의 퍼포먼스와 관련된 그래프는 [여기](https://rithmschool.github.io/function-timer-demo/)서 참고가 가능하다.)

<br/>

## 빅오표기법

> ![](https://cooervo.github.io/Algorithms-DataStructures-BigONotation/images/graphs/comparison.svg)
>
> - 대표적인 빅오 표기법인 O(n^2), O(n log n), O(n), O(log n), O(1)이 있다.

- 빅오 표기법은 알고리즘의 효율성을 표기해주는 표기법이다. 즉, 데이터 처리를 위한 연산의 횟수를 표기해주는 표기법으로서, input 값인 n에 따라서 알고리즘의 실행 시간이 어떻게 변하는지 설명하는 공식적인 방식이다.

- 예시로 들은 두가지 함수에 대해서, 빅오 표기법을 통해 나타내만 다음과 같다.

```javascript
// 연산이 매개변수에 비례하여 증가함: O(n)
// 5n이 됐건, 10n이 됐건, 정확한 연산횟수에는 상관이 없기 때문에 n이다.
export const addUpToFirst = (number) => {
  let total = 0;

  for (let i = 1; i <= number; i++) {
    total += i;
  }

  return total;
};

// 전체적으로 연산은 *, +, / 이 3부분에서만 일어남: O(1)
export const addUpToSecond = (number) => {
  return (number * (number + 1)) / 2;
};
```

## 문제 설명

수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

## 제한 조건

- arr은 길이 1 이상, 100 이하인 배열입니다.
- arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

## 소스 코드

```

function solution(arr) {
    return arr.reduce((acc, cur) => acc + cur)/arr.length;
}

```

## 문제 풀이
1. reduce()를 이용하여 배열의 모든 수를 더 하고, 그 값에 배열의 길이를 나누어 평균값을 구한다
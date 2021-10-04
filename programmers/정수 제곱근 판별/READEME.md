## 문제 설명

임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

## 제한 조건

- n은 1이상, 50000000000000 이하인 양의 정수입니다.

**입출력 예 #1** 121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.
**입출력 예 #2** 3은 양의 정수의 제곱이 아니므로, -1을 리턴합니다.

## 소스 코드

```javascript

function solution(n) {
    let answer = Math.sqrt(n)
    return Number.isInteger(answer) ? (answer+1)** 2 : -1
}

```  

## 문제 풀이
1. 제곱근을 구하여 정수인지 판별한다
- [`Math.sqrt()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt) : 숫자의 제곱근을 반환한다
- [`Number.isInteger()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger) : 주어진 값이 정수인지 판별한다
- 제곱 구하기(base, exponent)
    - [`Math.pow(base, exponent)`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/pow) : base 에 exponent를 제곱한 값을 반환
    - (base)** 2
    - (base) * (base)

## **문제 설명**

자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

## 제한 조건

N의 범위 : 100,000,000 이하의 자연수

**입출력 예 #1** 문제의 예시와 같습니다.

**입출력 예 #2** 9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.

## **solution.js**

```jsx
function solution(n){
    return n.toString().split('').reduce((acc ,cur) => acc + Number(cur),0);
}
```

```jsx
function solution(n){
		let answer = 0;
    n += "";
    for (let i = 0; i < n.length; i++) {
        answer += Number(n[i]);
    }
}
```

- reduce() 를 이용할때 ,0 을 이용하여 acc 값을 초기화 시켜주어야 하는 부분이 아직 이해가 되지 않는다
- n += "" 는 숫자열에 문자열을 더하면 문자열로 변환되는 것을 이용한 문자열 변환식
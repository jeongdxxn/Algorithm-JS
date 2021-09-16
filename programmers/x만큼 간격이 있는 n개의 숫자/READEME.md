## 문제 설명

함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.  

## 제한 조건

- x는 -10000000 이상, 10000000 이하인 정수입니다.
- n은 1000 이하인 자연수입니다.  

## 소스 코드

```
function solution(x, n) {
    let answer = [];
	    for(let i = 1; i <= n; i++){ // n의 수만큼 반복하고
        answer.push(x * i); // 1씩 증가하는 i를 x에 곱하고 answer에 push
    }
    return answer;
}
```  

## 문제 풀이
1. 반복문을 이용하여 n의 수만큼 반복하고
2. i를 x에 곱하고 push 를 통해 answer 에 넣는다.
- push : 마지막 배열에 요소(element)를 추가
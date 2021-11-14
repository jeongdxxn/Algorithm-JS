## **문제 설명**

자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

## 제한 조건

n은 10,000,000,000이하인 자연수입니다.

[입출력 예시](https://www.notion.so/11f8b50b87134dc496957ca6f533e702)

## **solution.js**

- 숫자는 인덱스를 구할 수 없기 때문에 문자열로 변환시켜준 뒤 for 반복문을 통해 각 인덱스를 미리 배열로 선언해둔 answer에 n 의 원소값이 뒤집어진 형태로 들어갈 수 있도록 unshift() 를 이용해 차례대로 배열을 맨 앞자리에 넣어준다

```jsx
function solution(n) {
    let answer = [];
    let str = n.toString()
    for(let i = 0; i < str.length; i++){
        answer.unshift(Number(str[i]))
    }
    return answer
}
```

## + **solution.js**

- 배열의 마지막에 원소를 넣어주는 push() 를 이용하기 위해선 for문의 조건을 아래와 같이 설정한다

```jsx
function solution(n) {
    let answer = [];
    let str = n.toString();
    for(let i = str.length-1; i >= 0; i--) {
      answer.push(Number(nStr[i]));
    }
    return answer;
}
```

## + **solution.js**

- 메소드와 map 을 이용한 풀이

```jsx
function solution(n) {
	return n.toString().split('').reverse().map(el => parseInt(el));
}
```

## 느낀점

- 메소드에 고차함수를 함께 이용하는 식이 아직 어렵다. 메소드와 고차함수를 함께 사용하는 풀이를 많이 작성해봐야할 것 같다. reverse() 를 사용하는 식을 작성했을 때 배열의 원소가 문자열인 부분을 해결하지 못했는데 map() 을 통해 원소를 숫자타입으로 뽑아낼 수 있는 방법이 있었다.
- split() 을 이용할 때는 문자열이여야한다는 점을 유의하자.(문자열일때는 배열이 아니여도 적용된다)
## 문제 설명

양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

## 제한 조건

- x는 1 이상, 10000 이하인 정수입니다.

## 입출력 예시

**입출력 예 #1**  10의 모든 자릿수의 합은 1입니다. 10은 1로 나누어 떨어지므로 10은 하샤드 수입니다.
**입출력 예 #2**  12의 모든 자릿수의 합은 3입니다. 12는 3으로 나누어 떨어지므로 12는 하샤드 수입니다.
**입출력 예 #3**  11의 모든 자릿수의 합은 2입니다. 11은 2로 나누어 떨어지지 않으므로 11는 하샤드 수가 아닙니다.
**입출력 예 #4**  13의 모든 자릿수의 합은 4입니다. 13은 4로 나누어 떨어지지 않으므로 13은 하샤드 수가 아닙니다.

## 소스 코드

```

function solution(x) {
    let answer = true; //리턴값으로 불린값을 받아야 하니까 true 할당
    let num = 0;
    let arr = String(x).split(''); //인자 x를 문자화시켜서 분리시킴
    for(let i = 0; i < arr.length; i++){
        num += Number(arr[i]); //arr[i]를 숫자로 만들고 num에 담는다.
    }
    answer = x % num === 0 ? true : false; //x를 num으로 나누었을 때 0이면 true
    return answer;
}

```

## 문제 풀이
1. 변수 두개에 각각 불린값인 true(answer) 와 0(num) 을 할당한다
2. 인자를 문자화 시키고 문자들을 배열로 분리하여 변수(arr)에 담는다
- split()은 문자열에만 적용가능
3. 분리시킨 배열을 차례대로 더하여 변수(num)에 담는다
4. 인자를 (num)으로 나누었을때 나머지가 0 일 경우 true 아닐 경우 false를 반환한다
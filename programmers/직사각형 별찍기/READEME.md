### 문제 설명

이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

### 제한 조건

- n과 m은 각각 1000 이하인 자연수입니다.

### 소스 코드(1)

```
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    let result = ""; 

    for (let i = 0; i < b; i++) { //이중반복문 사용
        for (let j = 0; j < a; j++) { //j가 반복될때마다 result에 * 추가
            result += '*';
        }
    result += '\n' // result에 * 추가하고 '\n'로 줄바꿈
    }
console.log(result);
});
```

### 문제 풀이
1. 이중반복문을 이용
- i의 길이를 b로 설정하고, j의 길이를 a로 설정
- j반복문이 실행될 때마다 result에 * 추가
2. j반복문이 실행되고 난 뒤 result에 '\n'을 넣어서 줄 바꿈

### 소스 코드(2)
- repeat() : 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환
```
const row = '*'.repeat(a)
    for(let i =0; i < b; i++){
        console.log(row)
    }
```
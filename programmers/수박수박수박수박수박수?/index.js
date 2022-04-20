function solution(n) {
  // 배열을 선언해서 n번까지 조회하면서
  // 홀수에 '수', 짝수에 '박'을 넣어준 뒤
  // 문자열로 합쳐준다.
  let str = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) str.push("수");
    else if (i % 2 === 0) str.push("박");
  }
  return str.join("");
}

// * 다른풀이
function solution(n) {
  let answer = "수박";
  // repeat 으로 반복시켜주고(미리 선언된 1개를 빼준다),
  // 0부터 n까지 잘라낸다.
  answer = result.repeat(n - 1).substring(0, n);
  return answer;
}

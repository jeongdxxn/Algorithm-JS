function solution(n) {
  let answer = [];
  for (let i = 2; i <= n; i++) {
    answer.push(i);
  }

  let isPrime = [];
  isPrime = answer.filter((el) => {
    if (el === 2 || el === 3 || el === 5 || el === 7) return el;
    if (el % 2 !== 0 && el % 3 !== 0 && el % 5 !== 0 && el % 7 !== 0) {
      return el;
    }
  });
  return isPrime.length;
}
// ..ㅋ
// 테스트 1 〉 통과 (0.06ms, 30MB)
// 테스트 2 〉	실패 (0.12ms, 29.9MB)
// 테스트 3 〉	실패 (0.17ms, 30.1MB)
// 테스트 4 〉	실패 (0.22ms, 30.2MB)
// 테스트 5 〉	실패 (0.16ms, 30MB)
// 테스트 6 〉	실패 (1.72ms, 31.7MB)
// 테스트 7 〉	실패 (0.37ms, 29.8MB)
// 테스트 8 〉	실패 (1.41ms, 31.7MB)
// 테스트 9 〉	실패 (1.85ms, 31.5MB)
// 테스트 10 〉	실패 (15.93ms, 41.6MB)
// 테스트 11 〉	실패 (53.21ms, 61.9MB)
// 테스트 12 〉	실패 (16.80ms, 41.6MB)
// 효율성  테스트
// 테스트 1 〉	실패 (79.19ms, 61.3MB)
// 테스트 2 〉	실패 (74.60ms, 61.6MB)
// 테스트 3 〉	실패 (86.25ms, 67MB)
// 테스트 4 〉	실패 (81.92ms, 61.7MB)

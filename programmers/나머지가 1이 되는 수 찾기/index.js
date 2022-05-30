function solution(n) {
  var answer = [];
  for (let i = 2; i <= n; i++) {
    if (n % i === 1) return i;
  }
}
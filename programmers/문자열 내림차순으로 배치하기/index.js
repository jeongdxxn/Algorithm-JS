function solution(s) {
  // 소문자 -> 대문자 순
  return s.split("").sort().reverse().join("");
}
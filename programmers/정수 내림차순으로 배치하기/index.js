function solution(n) {
  let answer = n.toString().split('')
  return Number(answer.sort((a, b) => b - a).join(''));
}
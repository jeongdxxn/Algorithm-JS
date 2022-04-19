function solution(price, money, count) {
  // 놀이기구를 count 수만큼 타는 동안 price를 n배해서 더한 값이
  // money 보다 작을 경우 0을 리턴하고,
  // money 보다 클 경우 모자라는 금액을 리턴한다
  let answer = money;
  for (let i = 1; i <= count; i++) {
    answer -= price * i;
  }
  return answer > 0 ? 0 : Math.abs(answer);
}

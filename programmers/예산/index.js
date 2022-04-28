function solution(d, budget) {
  // 최대한 많은 부서에 물품을 지원
  // 이게 되네..?
  let count = 0;
  let result = 0;
  let sum = d.reduce((acc, cur) => acc + cur);

  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    result += d[i];
    count++;
    if (result > budget) {
      result -= d[i - 3];
      count--;
    } else if (result === budget) {
      return count;
    }
  }

  return sum <= budget ? d.length : count;
}

// 다른풀이
// 근데 문제 의도에 적합하지 않은 풀이인 것 같다.
// budget 보다 적은 d의 조합을 모두 구해보고 최대 부서의 수를 리턴해야할 것 같은데
// 아래 코드는 그냥 budget 보다 작을 때까지 count 한 것이 테스트값과 맞아 떨어진 것
function solution(d, budget) {
  let count = 0;
  let result = 0;

  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    result += d[i];
    if (result <= budget) count++;
  }
  return count;
}
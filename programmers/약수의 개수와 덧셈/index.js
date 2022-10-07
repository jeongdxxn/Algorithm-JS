function solution1(left, right) {
  let result = 0;
  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
    }
    if (count % 2 === 0) result += i;
    else result -= i;
  }
  return result;
}

/**
 * 다른 풀이
 * !제곱근이 정수면 약수의 갯수가 홀수다..⭐️
 */
function solution2(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
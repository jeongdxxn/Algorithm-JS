function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    signs[i] === true ? (answer += absolutes[i]) : (answer -= absolutes[i]);
  }
  return answer;
}

function solution(absolutes, signs) {
  // reduce(누산기, 현재값, 현재인덱스, 원본배열)
  // signs[idx]가 false값일 경우 -1을 곱해서 음수로 만들어주고 누산기에 더해준다.
  return absolutes.reduce((acc, cur, idx) => acc + cur * (signs[idx] ? 1 : -1), 0);
}


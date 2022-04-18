function solution(array, commands) {
  //commands의 [i][0] -> i
  //commands의 [i][1] -> j
  //commands의 [i][2] -> k
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    // .slice(start, end);
    // 인덱스는 0부터 시작이고, slice에서 end는 포함하지 않기때문에
    // start 수만 -1을 해준다.
    let newArr = array.slice(commands[i][0] - 1, commands[i][1]);
    // .sort 오름차순 구현
    // 괄호 안에 다음과 같은 코드를 쓰지않을 경우 숫자의 앞자리 수로만 정렬하기 때문에
    // 올바르게 정렬되지 않을 수 있다.
    newArr.sort((a, b) => a - b);
    // 인덱스는 0부터 시작이므로 k - 1 번째 요소를 answer에 넣어준다.
    answer.push(newArr[commands[i][2] - 1]);
  }
  return answer;
}

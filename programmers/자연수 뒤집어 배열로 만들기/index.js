function solutionOne(n) {
  let answer = [];
  let str = n.toString()
  for(let i = 0; i < str.length; i++){
      answer.unshift(Number(str[i]))
  }
  return answer
}

function solutionTwo(n) {
  let answer = [];
  let str = n.toString();
  for(let i = str.length-1; i >= 0; i--) {
    answer.push(Number(nStr[i]));
  }
  return answer;
}
function solutionOne(n){
  return n.toString().split('').reduce((acc ,cur) => acc + Number(cur),0);
}

function solutionTwo(n){
  let answer = 0;
  n += "";
  for (let i = 0; i < n.length; i++) {
      answer += Number(n[i]);
  }
}
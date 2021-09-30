function solution(x) {
  let answer = true;
  let num = 0;
  let arr = String(x).split('');
  for(let i = 0; i < arr.length; i++){
    num += Number(arr[i]);
  }
  answer = x % num === 0 ? true : false;
  return answer;
}
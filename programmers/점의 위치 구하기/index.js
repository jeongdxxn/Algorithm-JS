// 첫번째 풀이
function solution(dot) {
  let arr = [];
  let result = 1;

  for (let i = 0; i < dot.length; i++) {
    arr.push(Math.sign(dot[i]));
  }

  if (arr[0] === 1 && arr[1] === -1) {
    result = 4;
  } else if (arr[0] === -1 && arr[1] === -1) {
    result = 3;
  } else if (arr[0] === -1 && arr[1] === 1) {
    result = 2;
  }

  return result;
}
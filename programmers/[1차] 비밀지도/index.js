function solution(n, arr1, arr2) {
  let answer = [];
  let newArr1, newArr2, s;
  for (let i = 0; i < n; i++) {
    newArr1 = arr1[i];
    newArr2 = arr2[i];
    s = '';
    for (let j = 0; j < n; j++) {
      if (newArr1 % 2 + newArr2 % 2) {
        s = '#' + s
      } else {
        s = ' ' + s;
      }
      newArr1 = Math.floor(newArr1/2);
      newArr2 = Math.floor(newArr2/2);
    }
    answer.push(s);
  }

  return answer;
}

function solution(n, lost, reserve) {
  // N의 수만큼 1로 채운 배열을 만들고,
  // 그 배열의 인덱스가 lost와 같으면 -1을, reserve와 같으면 +1을 해주었다.
  
  // 그 배열의 요소를 모두 더하여 리턴하였을 경우 일부 테스트는 통과하지만
  // 앞,뒤 번호 학생끼리만 체육복을 빌릴 수 있다는 조건을
  // 충족시키지 못하기 때문에 통과할 수 없다.
  // let arr = new Array(n).fill(1);
  // for (let i = 0; i < n; i++) {
  //   if (lost.includes(i)) arr[i - 1]--;
  //   if (reserve.includes(i)) arr[i - 1]++;
  // }
  // return arr.reduce((acc, cur) => acc + cur, 0);

  let arr = new Array(n).fill(1);
  // 0부터 n이하를 조회할 경우
  // [1, 2, 3] 이 주어지는 경우 3을 조회하지 못하게 되므로
  // 1부터 n번까지 조회하고 arr[i]에 -1 해주어 해당 인덱스에 값을 더하거나 빼준다.
  for (let i = 1; i <= n; i++) {
    if (lost.includes(i)) arr[i - 1]--;
    if (reserve.includes(i)) arr[i - 1]++;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      arr[i]--;
      if (arr[i - 1] === 0) arr[i - 1]++;
      else if (arr[i + 1] === 0) arr[i + 1]++;
    }
  }
  let result = arr.filter((el) => el === 1);
  return result.length;
}

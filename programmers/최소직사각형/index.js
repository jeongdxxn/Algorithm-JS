function solution(sizes) {
  // 가로길이가 더 크도록 명함 회전
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      [sizes[i][0], sizes[i][1]] = [sizes[i][1], sizes[i][0]];
    }
  }
  // 가로의 최대값 * 세로의 최대값
  let x = sizes.sort((a, b) => b[0] - a[0])[0][0];
  let y = sizes.sort((a, b) => b[1] - a[1])[0][1];
  return x * y;
}

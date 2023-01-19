function solution(t, p) {
  let count = 0;
  for (let i = 0; i < t.length; i++) {
    let slice = t.substr(i, p.length);
    if (slice.length === p.length && Number(slice) <= Number(p)) {
      count++;
    }
  }
  return count;
}
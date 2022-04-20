function solution(strings, n) {
  // sort() 메소드를 이용해서 문자열 정렬
  // sort() 괄호 안에 매개 변수가 주어지지 않았을 경우 전체를 비교해서 정렬한다.
  // 이때 n번째 인덱스 문자를 기준으로 해야 하기 때문에
  // localeCompare() 메소드(참조 문자열과 비교해서 정렬 순서를 순서로 반환)를 이용해서 a, b를 비교해준다.
  // n번째 인덱스에 같은 알파벳이 있을 경우 전체 str을 비교해서 순서를 반환해준다.
  let answer = strings.sort((a, b) => {
    if (a[n] !== b[n]) {
      return a[n].localeCompare(b[n]);
    } else {
      return a.localeCompare(b);
    }
  });
  return answer;
}

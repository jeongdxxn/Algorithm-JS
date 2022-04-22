function solution(s, n) {
  // 알파벳을 분리해서 배열로 만들어 준 뒤,
  // 공백은 공백 그대로
  // 다른 알파벳은 charCodeAt() 메소드를 이용해 유니코드로 변환해서 n을 더해줬을 때,
  // 90(알파벳 z의 유니코드, 소문자는 유니코드가 다르므로 대문자 알파벳으로 통일 시킨다) 보다 클 경우,
  // 26(전체 알파벳 개수)를 빼서 처음으로 돌려준다.
  // 90 보다 크지 않을 경우 n을 더한 유니코드를 다시 fromCharCode() 메소드를 이용해 알파벳으로 변환해준다.
  // join() 메소드를 이용해 알파벳을 다시 합쳐준 뒤 return 한다.
  const str = s.split("");
  const result = str
    .map((el) => {
      if (el === " ") return " ";
      let char = el.charCodeAt();
      if (el.toUpperCase().charCodeAt() + n > 90) {
        return String.fromCharCode(char + n - 26);
      } else {
        return String.fromCharCode(char + n);
      }
    })
    .join("");
  return result;
}

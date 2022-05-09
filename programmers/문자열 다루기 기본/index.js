function solution(s) {
  // '==' 는 서로 다른 유형의 두 변수의 값만 비교, 자료형은 판단x
  return (s.length === 4 || s.length === 6) && s == parseInt(s);
}
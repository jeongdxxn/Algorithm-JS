function solution1(s) {
  // '==' 는 서로 다른 유형의 두 변수의 값만 비교, 자료형은 판단x
  return (s.length === 4 || s.length === 6) && s == parseInt(s);
}

/*
* 정규식 풀이
*/
function solution2(s) {
  // d가 숫자를 뜻하는 표현식이기때문에 d{6}, d{4} 은 숫자 6자리, 4자리를 찾는다.
  // ^ : 시작, $ : 끝
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}
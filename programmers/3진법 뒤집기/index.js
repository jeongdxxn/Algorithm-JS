// 삼진법 : 삼진법은 3을 밑으로 하는 기수법
// 45(10) >	1200(3) > 0021(반전) >	7(10)
// 125(10) > 11122(3)	> 22111(반전)	> 229(10)
function solution(n) {
  // 문자열로 변환해서 뒤집어 준 뒤, 다시 합쳐준다
  // toString(기수의 값(option))
  let answer = n.toString(3).split("").reverse().join("");
  // parseInt(숫자로 변환할 문자열, 기수의 값(option));
  return parseInt(answer, 3);
}
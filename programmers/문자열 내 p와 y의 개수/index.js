function solution(s) {
  let str = s.toLowerCase();
  let strP = 0;
  let strY = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "p") strP++;
    if (str[i] === "y") strY++;
  }
  return strP === strY ? true : false;
}
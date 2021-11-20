function power(base, exponent) {
  if(exponent === 0){
    return 1;
  }
  if(exponent % 2 ===0){
    // 2^5 * 2^5 = 2^10 이므로 분할정복법을 사용
    let evenNum = power(base, exponent / 2)
    return (evenNum * evenNum) % 94906249
  }
  else{
    // exponent가 홀수(11)일 경우 분할정복법을 사용하기 위해 1을 빼서 짝수(10)로 만들어주고
    // 다시 base를 곱해서 최종적으로 (11)승을 만들어준다
    let oddNum = power(base, (exponent - 1) / 2)
    return (base * ((oddNum * oddNum % 94906249))) % 94906249
  }
}
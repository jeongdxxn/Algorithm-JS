//! 테스트값 9개 중 2개 통과
// new Set 으로 중복요소를 삭제할 필요x
function solution(numbers) {
  // 이중반복문
  // numbers 요소에 나머지 요소를 더해준 값을 배열에 넣어주는데
  // 그때 중복되는 요소가 있을 경우 넣지않는다.
  let arr = [...new Set(numbers.sort())];
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      if (!result.includes(sum)) result.push(sum);
    }
  }
  return result;
}

//! 테스트값 9개 중 4개 통과
function solution(numbers) {
  let sortArr = numbers.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < sortArr.length; i++) {
    for (let j = i + 1; j < sortArr.length; j++) {
      let sum = numbers[i] + sortArr[j];
      if (!result.includes(sum)) result.push(sum);
    }
  }
  return result;
}

//! 통과
// numbers를 먼저 정렬하고 요소를 더한 값을 출력하는 것과
// 요소를 더한 값을 출력하고 정렬하는 것의 차이점이 뭔지 알아보기
function solution(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      if (!result.includes(sum)) result.push(sum);
    }
  }
  return result.sort((a, b) => a - b);
}
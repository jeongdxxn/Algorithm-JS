const rotatedArraySearch = function (rotated, target) {
   // 이진탐색을 이용하는데, 오름차순이 부분으로 들어가있어 조건문을 이용해 조회하는 인덱스를 잘 설정해 줘야 한다

  let firstIdx = 0
  let lastIdx = rotated.length - 1;

  while (firstIdx <= lastIdx) {
    let midIdx = parseInt((firstIdx + lastIdx) / 2); 
    
    // target 과 일치할때 인덱스 반환
    if (rotated[midIdx] === target) { 
      return midIdx;
    }

    // 첫번째 인덱스 수가 미들 인덱스보다 작을 때 => 미들 인덱스 기준으로 왼쪽 요소들 정렬
    if (rotated[firstIdx] < rotated[midIdx]) {
      // 첫번째 인덱스 수 <= target < 미들인덱스
      if (target < rotated[midIdx] && rotated[firstIdx] <= target) {
        // => 미들인덱스에서 1을 뺀 요소를 마지막 요소로해서 미들 인덱스를 구하게 된다
        // [1, 2, 3, 4, 5, 6, 7] => [1, 2, 3] => '2'
        lastIdx = midIdx - 1;
      } else {
        // => 미들인덱스에서 1을 더한 요소를 첫번째 요소로 해서 미들 인덱스를 구하게 됨 
        // [1, 2, 3, 4, 5, 6, 7] => [5, 6, 7] => '6'
        firstIdx = midIdx + 1;
      }
    } else { // 첫번째 인덱스가 미들인덱스보다 작지 않을 때 => 미들 인덱스를 기준으로 오른쪽 요소들 정렬
      // 미들인덱스 < target <= 마지막 인덱스
      if (target <= rotated[lastIdx] && rotated[midIdx] < target) {
        firstIdx = midIdx + 1;
      } else {
        lastIdx = midIdx - 1;
      }
    }
  }

  return -1;
};

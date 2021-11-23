const binarySearch = function (arr, target) {
  // arr[idx] === target 일때, idx 반환
  let start = 0;
  let last = arr.length - 1;

  while(start <= last){
    // 이진 탐색 알고리즘
    let middle = Math.floor((start + last) / 2)
    if(arr[middle] === target){
      return middle;
    } else if(arr[middle] < target){ 
      start = middle + 1; // 오른쪽으로 한칸식 이동해서 조회
    } else { 
      last = middle - 1 // 왼쪽으로 한칸식 이동해서 조회
    }
  }
  return -1;
};
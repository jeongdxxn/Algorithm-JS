const bubbleSort = function (arr) {
  // arr[0] 와 arr[1] 를 비교한 뒤, 큰 수를 뒤로 가게 한다.
  // arr[1] 과 arr[2] 를 비교한다 ... 반복
  // arr의 마지막 요소까지 비교한 뒤 다시 처음부터 비교를 반복한다 => 재귀

  let changed = false;
  let swap;

  for(let i = 0; i < arr.length; i++){
    if(arr[i] > arr[i+1] && arr[i+1]){
      swap = arr[i]
      arr[i] = arr[i+1]
      arr[i+1] = swap
      changed = true;
    }
  }
  return changed ? bubbleSort(arr) : arr;
};
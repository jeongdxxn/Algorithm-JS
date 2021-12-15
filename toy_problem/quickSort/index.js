function quickSort(arr, transform = (item) => item) {
  
  // basecase 설정
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  // 모든 수를 조회하여 작으면 left, 크면 right에 넣어준다
  for (let i = 1; i < arr.length; i++) {
    if (transform(arr[i]) < transform(pivot)) left.push(arr[i]); 
    else right.push(arr[i]); 
  }

  // 재귀를 이용해 왼쪽 배열 오름차순 구현
  const lSorted = quickSort(left, transform);
  // 재귀를 이용해 오른쪽 배열 오름차순 구현
  const rSorted = quickSort(right, transform);
  
  return [...lSorted, pivot, ...rSorted];
  
}
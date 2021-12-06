// 병합정렬 : 배열을 쪼갰다가 다시 합치면서 정렬시키는 형태
// * 병렬을 쪼개는 함수(Divide) - 재귀함수를 이용
const mergeSort = function (arr) {
  // basecase
  if(arr.length === 1) return arr; 

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};
// * 병렬을 합쳐서 정렬시키는 함수(Combine)
const merge = function (left, right) {
  let result = [];

  while (left.length && right.length){
    if(left[0] <= right[0]){
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return [...result, ...left, ...right];
}

const insertionSort = function (arr, transform = (item) => item) {
  
  let sorted = [arr[0]];
  
  for (let i = 1; i < arr.length; i++) {
    // 콜백함수를 이용하여 배열의 앞뒤 요소를 비교
    if (transform(arr[i]) >= transform(sorted[i - 1])) { 
      sorted.push(arr[i]); 
    } else {
      for (let j = 0; j < i; j++) {
        if (transform(arr[i]) <= transform(sorted[j])) {
          const left = sorted.slice(0, j);
          const right = sorted.slice(j);
          sorted = left.concat(arr[i], right);
          break;
        }
      }
    }
  }

  return sorted;
}
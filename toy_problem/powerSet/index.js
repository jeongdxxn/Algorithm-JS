const powerSet = function (str) {
	// 인자로 받아온 문자열을 분리해서 배열로 만들고 정렬한다
	// 결과를 배열 안에 문자열로 받아야 한다
  let arr = str.split('').sort(); 
  let result = [''];

  let power = (target, result) => {
    let copy = result.slice();
    for(let i = 0; i < copy.length; i++){
			// 기존 문자에 새로운 문자를 계속해서 더해주고
			// 더해줄때마다 배열에 넣어준다
      copy[i] += target; 
      result.push(copy[i])
    }
    return result;
  }
  for(let i = 0; i < arr.length; i++){
		// arr배열의 요소가 result배열에 없을때
		// 함수에 인자로 넣어준다
    if(!result.includes(arr[i])){ 
      power(arr[i], result) 
    }
  }
  return result.sort();
};
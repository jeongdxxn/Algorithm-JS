function solution1(number) {
  let trioCount = 0;
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) trioCount++;
      }
    }
  }
  return trioCount;
}

function solution2(number) {
  let result = 0;
  const combination = (current, start) => {
    if(current.length === 3) {
      result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
      return;
    }
    for(let i = start; i < number.length; i++) {
      combination([...current, number[i]], i + 1);
    }
  }
  combination([], 0);
  return result;
}
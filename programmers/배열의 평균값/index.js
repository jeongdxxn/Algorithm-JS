function solution1(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    count = count + numbers[i] / numbers.length;
  }
  return count;
}

function solution2(numbers) {
  return numbers.reduce((acc, cur) => acc + cur) / numbers.length;
}

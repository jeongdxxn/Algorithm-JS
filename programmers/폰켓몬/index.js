/* 폰켓몬 전체 수의 절반을 가져갈 수 있다. 이때 중복없는 폰켓몬 조합을 만들고 폰켓몬 수를 리턴한다. */
function solution(nums) {
  // 전체 폰켓몬의 절반의 수를 구하고
  // 절반의 수를 넘지 않을때까지 일치하지않는 폰켓몬을
  // 배열에 담고, 그 길이를 리턴한다.
  let limit = nums.length / 2;
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    if (answer.length < limit && !answer.includes(nums[i])) {
      answer.push(nums[i]);
    }
  }
  return answer.length;
}

function solution(nums) {
  // 전체 폰켓몬의 절반의 수를 구하고
  // new Set 객체를 활용해서 중복을 제거해준 뒤
  // 그 수가 절반보다 같거나 작을 경우 리턴한다.
  let limit = nums.length / 2;
  let arr = [...new Set(nums)];
  return arr.length > limit ? limit : arr.length;
}

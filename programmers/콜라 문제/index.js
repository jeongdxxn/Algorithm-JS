function solution(a, b, n) {
  // a : 콜라를 받기위해 마트에 주어야하는 빈 병 수 (2)
  // b : 빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수 (1)
  // n : 총 가지고 있는 빈 병의 개수 (20)

  let totalBottle = 0; // 새로 받을 수 있는 콜라의 수
  let count = 0; // 새로받는 콜라의 총합

  while (n >= a) {
    totalBottle = Math.floor(n / a) * b;
    count += totalBottle;
    n = Math.floor(n / a) * b + (n % a);
  }
  return count;
}

/**
 * 위에 처럼 풀이했을 때 테스트 14개 1개만 통과가 되었다
 * 코드 실행 테스트는 2개 모두 통과
 * 채점 결과 정확성이 100점 만점에 7.1점으로 형편없
 */

function solution(a, b, n) {
  let totalBottle = 0;
  let count = 0;

  while (n >= a) {
    totalBottle = Math.floor(n / a) * b;
    count += totalBottle;
    n = Math.floor(n / a) * b + (n % a);
  }
  return count;
}

/**
 * solution)
 * 빈병을 가져갔을때 받을 수 있는 새 콜라 병 수를 설정해주지않으면
 * 1병을 돌려받는 값만 출력되서 나머지 테스트가 다 통과가 안되었던 것 
 */
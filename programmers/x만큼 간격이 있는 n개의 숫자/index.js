function solution(x, n) {
    let answer = [];
	    for(let i = 1; i <= n; i++){ // n의 수만큼 반복하고
        answer.push(x*i); // 1씩 증가하는 i를 x에 곱하고 answer에 push
    }
    return answer;
}
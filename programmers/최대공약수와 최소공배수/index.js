function solution(n, m) {
    let answer = [];
    let num = 0;
    
    for(let i = 0; i <= n; i++){
        if(n % i === 0 && m % i === 0){
            num = i
        }
    }
    answer.push(num)
    answer.push(num * (n/num) * (m/num))
    
    return answer;
}
function solution(participant, completion) {
    participant.sort(); // 배열을 알파벳 순으로 정렬
    completion.sort(); // 배열을 알파벳 순으로 정렬
    for(let i = 0; i < participant.length; i++){
        if(participant[i] !== completion[i]){ // 같은 선수가 없을 때
            return participant[i] // 반환
        }
    }
}
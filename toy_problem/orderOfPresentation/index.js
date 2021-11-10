let result = [];
let count = 0;

for(let i = 0; i < N; i++){
  result.push(K[i])
  for(let j = 1; j <= K[i]; j++){
    if(!result.includes(j)){
      let sum = 1;
      for(let k = 1; k <= N - i - 1; k++){ 
        sum *= k;
      }
      count += sum
    }
  }
}
return count;
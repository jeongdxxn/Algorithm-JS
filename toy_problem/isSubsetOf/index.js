const isSubsetOf = function (base, sample) {
  // sample 의 모든 요소가 base 의 요소 일부와 일치해야한다
  // base 요소를 sample 의 첫번째 요소를 비교해서 일치할때 sample의 첫번째 요소를 삭제(shift())한다
  // => sample의 길이가 0이 되면 true

  base.sort();
  sample.sort();
  
  for(let i = 0; i < base.length; i++){
    if(base[i] === sample[0]){
      sample.shift()
      if(!sample.length){
        return true;
      }
    }
  }
  return false;
};

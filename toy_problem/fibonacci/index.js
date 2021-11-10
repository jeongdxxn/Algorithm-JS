function fibonacci(n) {
  let arr = [];
  function fibo(n){
    if(n < 2)return n;
    if(arr[n])return arr[n];
    return arr[n] = fibo(n-2) + fibo(n-1);
  }
  return fibo(n)
}
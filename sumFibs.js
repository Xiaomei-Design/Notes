function sumFibs(n) {
  let f = [0, 1];
  let sum = 0;
	for(let i = 2; i < n+1; i++) {
    f[i] = f[i-1] + f[i-2];
    if(f[i] % 2 === 0) {
      sum = sum + f[i]
    }
  }
  console.log(f)
  console.log(sum)
};

function sumFibs(n) {
  let start0 = 0;
  let start1 = 1;
  let sum = 0;
	for(let i = 2; i < n+1; i++) {
    fib = start0 + start1;
    start0 = start1;
    start1 = fib;
    if(fib % 2 === 0) {
      sum = sum + fib
    }
  }
  return sum;
};

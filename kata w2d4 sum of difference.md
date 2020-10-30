```javascript
// kata w2d4 sum of difference

function sumOfDifferences(arr) {
  let sum = 0;
  const sorted = arr.sort(function(a, b){
     return b -a;
  });
  for (let i = 0; i < sorted.length - 1; i++) {
    sum += arr[i]-arr[i+1]
  };
  return sum;
} 

// shorter version:

function sumOfDifferences(arr) {
  if (arr.length === 0) return 0;
  return Math.max(...arr) - Math.min(...arr) | 0;
}
```


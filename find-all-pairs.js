// find all pairs

function duplicates(array) {
  let double = [];
  let pairs = 0;
  for (let num of array) {
    if(double[num] !== num) {
    double[num] = num;
    } else {
      double[num] = undefined
      pairs++;
    }
  }
  return pairs
}

array.sort(function(a,b) {
return a - b;
});
console.log(array);
if(array[i] === array[i+1]) {
pairs++;
i++;
console.log(i)
}
return pairs


const array = [1,2,2,3,5,7,5,8,2,4,9]

function duplicates(array){
//Make the magic happen
  let counts = {};
  let newArr = [];
  let pairs = 0;
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1
    newArr.push(counts[num]);
  }
  console.log(counts);
  console.log(newArr);
  if(counts[num] >=2) {
  sum += Math.floor(counts[num] / 2);
  }
}

duplicates(array)

array.sort(function(a,b) {
return a - b;
});
console.log(array);
if(array[i] === array[i+1]) {
pairs++;
i++;
console.log(i)
}
return pairs



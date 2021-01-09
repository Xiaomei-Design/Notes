function evenBinary(n) {
  let arr = n.split(' ');
  let newArr = [];
  arr.forEach(el => {
    if(el[2] === "0") {
      newArr.push(el)
    }
  })
  newArr = newArr.sort()
  let j = 0;
  for(i = 0; i < arr.length; i++) {
    if(arr[i][2] === "0"){
      arr[i] = newArr[j];
      j  = j + 1
    }
  }
  return arr.join(' ')
}

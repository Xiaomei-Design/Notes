function deleteNth(arr,n){
  let obj = {};
  let i = 0;
  while (i < arr.length ) {
    if(!obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
    if(obj[arr[i]] > n) {
      arr.splice(i, 1);
    } else {
      i += 1
    }
  }
  return arr
}

function duplicateCount(text){
  let count = 0;
  text = text.toLowerCase();
  let obj = {};
  for(let i = 0; i < text.length; i++) {
    if(!obj.hasOwnProperty(text[i])) {
      obj[text[i]] = 1;
    } else {
      obj[text[i]] += 1;
    };
    
}
  for(let key in obj) {
    if(obj[key] > 1) count +=1
  }
  return count;
}

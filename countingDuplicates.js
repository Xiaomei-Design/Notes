// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


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

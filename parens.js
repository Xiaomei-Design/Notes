function validParentheses(parens){
  let count = 0;
  for(let el of p) {
    if(el === '(') count++
    if(el === ")") count--
    if(count < 0) return false
  }
  return count === 0
}

const validParentheses = p => {
  while (p.includes("()")) {
    p = p.split('()').join('')
  }
  return p.length === 0
}

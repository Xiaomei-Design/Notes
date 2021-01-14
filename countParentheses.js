const validParentheses = p => {
  while (p.includes("()")) {
    p = p.split('()').join('')
  }
  return p.length
}
validParentheses("(())))))")

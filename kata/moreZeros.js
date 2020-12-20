moreZeros("abcccde")

function moreZeros(s) {
  return [...new Set (s
    .split('')
    // .map(char => char.charCodeAt().toString(2))
  .filter(char => {
    const bin = char.charCodeAt().toString(2);
    console.log(bin)
   const zeros = bin.split('0').length-1
   const ones = bin.split('1').length -1
   return zeros > ones
  }))]
}

// my initial approach

// function moreZeros(s) {
//   const getNoneDuplicate = [...new Set(s)]
//   console.log(getNoneDuplicate)
//   console.log(s.charCodeAt(0))
  
//  getNoneDuplicate.map(el => {
//  el = el.charCodeAt(0)
//  })
  
// }

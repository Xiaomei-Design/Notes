```javascript
// maskify("4556364607935616") == "############5616"

const str = 'oiuytrdcv2345678'
function maskify(str) {
  if(str.length > 4) {
    let newStr = '';
    for (let i = 0; i < str.length-4; i++) {
    newStr += '#';
    }
    for (let i = str.length-4; i < str.length; i++) {
  newStr += str[i];
  };
    return newStr
} else {
  return str
  }
}
maskify(str)

// use repeat(count) Jan

function maskify(str) {
  if (str.length < 5) return str
  return '#'.repeat(str.length -4) + str.slice(-4)
}

// Mark

function maskify(cc) {
  return (cc.substring(cc.length-4)).padStart(cc.length,'#');
}

// Reverse Leonie

function maskify(cc) {
  let masked = "";
  for(let i = 0; i < cc.length; i++) {
    if(i < cc.length - 4) {
      masked = masked + "#";
    } else { 
      masked = masked + cc.charAt(i);
    };
  } return masked;
}
```


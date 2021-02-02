// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
const str = "the-stealth-warrior"


// function toCamelCase(str) {
//   return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
//     return index === 0 ? word.toLowerCase() : word.toUpperCase();
//   }).replace(/\s+/g, '');
// }

// function toCamelCase(str) {
//   return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
//     if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
//     return index === 0 ? match.toLowerCase() : match.toUpperCase();
//   });
// }

function toCamelCase(str){
  return str.split('-').map(function(word,index){
    // If it is the first word make sure to lowercase all the chars.
    if(index == 0){
      return word.toLowerCase();
    }
    // If it is not the first word only upper case the first char and lowercase the rest.
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join('');
}

toCamelCase(str)

const toCamelCase = s => {
    let toCamelCase = '';
    for (let i=0; i<s.length; i++) {

        if(s[i] === '_' || s[i] === '-') {
            camelCase += s[i+1].toUpperCase()
            // 
        } else {
            camelCase += s[i]
        }
        
    }
}

const toCamelCase = s => {
    return s.replace(/[-_][a-zA-Z]/g, match => {
        return match[1].toUpperCase()
    })
}
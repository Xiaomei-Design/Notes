// 1

const getCount = s => {
    let count = 0;
    for (let char of s) {
        if(['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase())){
            count++;
        }
    }
    return count;
}

// who includes who was not clearly to me


// My solution

function getCount(str) {
    let count = 0;
    const strlower = str.toLowerCase()
    for (let i = 0; i < strlower.length; i++) {
      if(strlower[i] === 'a' || strlower[i] === 'e' || strlower[i] === 'i' || strlower[i] === 'o' || strlower[i] === 'u' ){
        count ++;
      }
    }
    return count;
}
// Test.describe("Example tests",_=>{
// Test.assertEquals(divCon([9, 3, '7', '3']), 2);
// Test.assertEquals(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14); 
// Test.assertEquals(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13);
// });

// total interger - total non-interger

// my solution:
const x = ['5', '0', 9, 3, 2, 1, '9', 6, 7];
function divCon(x){
  let numberArr = [];
  let strArr = [];
  for(let el of x) {
    if(typeof el === 'number') {
      numberArr.push(el)
    } else if (typeof el === 'string') {
      strArr.push(el);
    }
  }
  console.log(numberArr, strArr);
  
  const sumOfNumber = numberArr.reduce((sumNum, val) => {
    return sumNum + val;
  }, 0);
  console.log(sumOfNumber);
  
  const sumOfString = strArr.map((string) => {
    return parseInt(string, 10);
  }).reduce((sumString, val) => {
    return sumString + val;
  }, 0);
 console.log(sumOfString);
  return sumOfNumber - sumOfString
}

divCon(x)

// solution Jan

function divCon() {
  let sumNum = 0;
  let sumString = 0;
  for (let number of ar) {
    if (typeof number === 'number') {
     sumNum += number;
    }
    if (typeof number === 'number') {
     sumString += Number(number);
  }
}
  return sumNum - sumString
}

function divCon() {
  return ar.reduce(function(res, number){
    if(typeof number === 'number') {
     // if (Number.isInteger(number))
      return res + number
    } else {
      return res - Number(number)
    }
  }, 0)
}
// Number.isInteger()



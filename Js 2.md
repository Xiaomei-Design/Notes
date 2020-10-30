```javascript
var s = "JavaScript syntax highlighting";
alert(s);

function welcome(name) {
  console.log(`Welcome, ${name}`)
}
welcome('Antonie')

function printToTwenty() {
  for(let i = 0; i <= 20; i++) {
    console.log(i)
  }
}
printToTwenty()

function printNumbers(num) {
  for(let i = 0; i <= num; i++) {
    console.log(i)
  }
}
printNumbers(10)

let ironCities = [
  'Amsterdam',
  'Barcelona',
  'Berlin',
  'Lisbon',
  'Madrid',
  'Mexico City',
  'Miami',
  'Paris',
  'Sao Paulo'
];
function printArrElements(arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArrElements(ironCities)

function printEvens(arr) {
  for (i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      console.log(arr[i]);
    }
  }
}
printEvens(ironCities)

const prices = [5, 7.99, 9.99, 0.99, 21]
function sumArr(arr) {
  let sum = 0;
  for(i = 0; i < arr.length; i+=1) {
    sum += arr[i];
    console.log(`$`+sum)
  }
}
sumArr(prices)

/* two ways to return a string in an array of its letters
function stringToLetters(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string.charAt(i));
}
}
stringToLetters('hello')
*/
function stringToLetters(string) {
  let arr = [];
  arr = string.split('')
  console.log(arr)
}

stringToLetters('Hello')

function countNum() {
  for(i=1; i <= 100; i++) {
   console.log(i) 
  }
}
countNum()
```


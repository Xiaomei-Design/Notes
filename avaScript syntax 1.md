~~~javascript
```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```
switch (expression) {
  case value1:
    // statements executed when the result of expression matches value1
    [break;]
  case value2:
    // statements executed when the result of expression matches value2
    [break;]
  ...
  case valueN:
    // statements executed when the result of expression matches valueN
    [break;]
  default:
    // statements executed when none of the values match the value of the expression
    [break;]
}
```

``` //Create an array with 6 of your favorite foods. With the loop of your choice, iterate through the array, but only print out the foods with an even index.

const favfood = ["rice", "sugar", "bread", "broccoli", "egg", "wiener schnitzel"]
for (let i=0; i < favfood.length; i++) {
  if (i % 2 !== 0) {
    console.log(`Index ${i}: ${favfood[i]}`)
  }
}
```

``` //Check if the word appears in given array and print out if it does or doesn’t:

let word = 'miami';
let arr = ['bcn', 'mia', 'sao', 'mex', 'par', 'miami', 'ams', 'ber', 'paris', 'lis', 'mad'];
const found = arr.find(element => element === word);
console.log(found);
// expected output: miami
```

```//round to one decimal
const prices = [10.99, 44.56, 112.79, 3, 5];
let sum = 0; 
for (let i = 0; i < prices.length; i++) {
  sum = sum + prices[i];
  console.log(sum.toFixed(1));
}
```

```//2D arrays with nested obejcts
let basic = {
  language: 'JavaScript',
  frameworks: [
    {
      end: 'back',
      list: [
        {
          name: 'ExpressJS',
          released: 2010
        },
        {
          name: 'MeteorJS',
          released: 2012
        }
      ]
    },
    {
      end: 'front',
      list: [
        {
          name: 'ReactJS',
          released: 2013
        },
        {
          name: 'VueJS',
          released: 2014
        }
      ]
    }
  ]
};
```
```//Let’s see how we can access the data:
console.log(basic.frameworks);
// gives us back the ARRAY with TWO OBJECTS
// => [
//      { end: 'back', list: [ [Object], [Object] ] },
//      { end: 'front', list: [ [Object], [Object] ] }
//    ]

// DON'T WORRY BECAUSE OF [Object] syntax, it just represents more complex structure inside. Will be covered later in the course.
```

```
console.log(basic.frameworks[1]);
// => {
//      end: 'front',
//      list:[
//             { name: 'ReactJS', released: 2013 },
//             { name: 'VueJS', released: 2014 }
//      ]
//    }
```
```
console.log(basic.frameworks[1].list[0]);
// => { name: 'ReactJS', released: 2013 }
```
~~~


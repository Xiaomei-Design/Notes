```javascript
// kata Pandemia 

// start: map1 = "01000000X000X011X0X"
// end:   map1 = "11111111X000X111X0X"
// total = 15
// infected = 11
// percentage = 100*11/15 = 73.33333333333333


function infected(s) {
  let total = 0;
  let infected = 0;
  let continents = s.split('X');
  // return continents;
  for (let continent of continents) {
    total += continent.length // total population
    if (continent.includes('1')) {
      infected += continent.length;
    }
  }
  if (total === 0) return 0;
  return (infected / total) * 100
}
```


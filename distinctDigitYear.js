// find distinct digit year
// use while

const distinctDigitYear = year => {
  year++;
  while(new Set(year.toString()).size < 4) {
        year ++
  }
  return year
}

// new Set(1234.toString())



// way 2, use indexOf, indexOf can be also used in String
// 'hello world'.indexOf('o', 11)  => -1, with any fromIndex value greater than 11

const numberIsDistinct = num => {
  num = num.toString();
  for (let i = 0; i<num.length; i++) {
    if(num.indexOf(num[i], i+1) !== -1) {
      return false;
    }
  }
  return true
}
numberIsDistinct(1234);

function distinctDigitYear(year) {
  for(let i= year; i< 9000; i++) {
    // if all the numbers are distinct -> return i
    if (numberIsDistinct(i)) return i;
  }
}

distinctDigitYear(1999)


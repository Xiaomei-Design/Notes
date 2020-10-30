```javascript
var s = "JavaScript syntax highlighting";
alert(s);

let phone = {
  brand: 'apple',
  type: 'iPhone',
  model: 'X',
  characteristics: {
    capacity: '256 GB',
    size: {
      height: '5.65 inches',
      width: '2.79 inches',
      depth: '0.3 inches'
    }
  },
  chip: ['bionic', 'neural engine', 'embedded motion processor']
};

function getPhoneDetails(thePhone) {
  console.log(`${thePhone.type} ${
    thePhone.model
  } by ${thePhone.brand.toUpperCase()} has the following characteristics: 
  1. capacity: ${thePhone.characteristics.capacity},
  2. dimensions: ${thePhone.characteristics.size.height} x ${
    thePhone.characteristics.size.width
  } x ${thePhone.characteristics.size.depth}, as well as the chip specs:`);

  for (let i = 0; i < thePhone.chip.length; i++) {
    console.log(`${i + 1} - ${thePhone.chip[i]}`);
  }
}

getPhoneDetails(phone);

// iPhone X by APPLE has the following characteristics:
//   1. capacity: 256 GB,
//   2. dimensions: 5.65 inches x 2.79 inches x 0.3 inches, as well as the chip specs:
// 1 - bionic
// 2 - neural engine
// 3 - embedded motion processor

```
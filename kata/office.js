// Test.assertEquals(boredom({tim: 'change', jim: 'accounts',
//   randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
//   laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
//   mr: 'finance' }), 'kill me now');

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

const staff = {tim: 'change', jim: 'accounts',
  randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
  laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
  mr: 'finance' }

const score = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    "pissing about": 25
  }

function boredom (staff) {
  let boredomLevel = 0;
  for (let person in staff) {
    console.log(score[staff[person]]);
    boredomLevel += score[staff[person]]
  };
  if (boredomLevel <= 80) return 'kill me now';
  if (boredomLevel > 80 && boredomLevel < 100) return 'i can handle this'
  return 'party time!!'
}

boredom(staff)


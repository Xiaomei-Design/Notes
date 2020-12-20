function list(names){
  let list = '';
  let arr = [];
  names.map(el => {
    // console.log(el.name);
    arr.push(el.name)
  })
  console.log(arr)
  arr.pop()
  console.log(arr.join(', '))
  list = list + arr.join(', ') + ` & ${arr.pop()}`
  console.log(list)
}

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''

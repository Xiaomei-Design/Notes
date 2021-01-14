function meanderingArray(unsorted) {
  let sorted = [];
  const sortedDesceding = unsorted.slice().sort((a,b) => {
    return b - a
  })
  const sortedAsceding = unsorted.slice().sort((a,b) => {
    return a - b
  })
  for (let i = 0; i < sortedDesceding.length/2; i++) {
    sorted.push(sortedDesceding[i]);
    sorted.push(sortedAsceding[i])
  }
  console.log(sorted)
}

meanderingArray([7,5, 2,7,8, -2, 25, 25])

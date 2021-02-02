// method 1

function capital(capitals){
  return capitals.map(pair => {
    // the problem is the key is dynamic -> assign a variable for this key
    const key = 'state' in pair ? 'state' : 'country'
    return `The capital of ${pair.country} is ${pair.capital}`
  })
}


// short version

const capital = capitals => capitals.map(pair => `The capital of ${pair.country || pair.state} is ${pair.capital}`)





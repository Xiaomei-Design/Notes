// solution 1: 

function top3(products, amounts, prices) {
    console.log(products, amounts, prices)
    const sales = []
    for (let i = 0; i <products.length; i++) {
      sales.push([products[i], amounts[i]*prices[i], i])
    }
    sales.sort(([a, b, i], [c, d, j]) => d === b ? i - j : d - b)
    console.log(sales)
    return [sales[0][0], sales[1][0], sales[2][0]]
  }


// solution 2: 

function top3(products, amounts, prices) {
    const rev = products.map((productName, index) => {
      return {
        name: productName,
        revenue: amounts[index] * prices[index]
      }
    })
    const sorted = rev.sort((a,b) => {
      return b.revenue - a.revenue || a.index - b.index
    })
    return sorted.slice(0, 3).map(product => product.name)
  }

  // solution 3: 

  function top3(products, amounts, prices) {
    const rev = products.map((product,i) => {
      return amounts[i] * prices[i]
    })
    const top3 = [];
    console.log(rev);
    console.log(products[rev.indexOf(Math.max(...rev))])
    for (let i =0; i< 3; i++) {
      top3.push(products[rev.indexOf(Math.max(...rev))])
      rev[rev.indexOf(Math.max(...rev))] = -1
      console.log(rev)
    }
  }
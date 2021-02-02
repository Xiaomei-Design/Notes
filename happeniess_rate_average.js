// kata w2d3 happeniess rate average

const meet = {
 'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0
}

// Monishka:

function outed(meet, boss) {
    let average = Object.keys(meet).reduce(function (acc, b) {
 if (b === boss) {
  acc += meet[b] * 2;
 }     else{
            acc += meet[b];
            }
  return acc;
 }, 0) / Object.keys(meet).length;
if (average <= 5) {
  return 'Get Out Now!'
}   else{
        return 'Nice Work Champ!';
    }
}

function outed(c, b) {
  return Object.keys(c).reduce((s, e) => s + c[e] * (e === b ? 2 : 1), 0) / Object.keys(c).length > 5 ? "Nice Work Champ!" : "Get Out Now!";
}

// Jan Code:

function outed(meet, boss) {
	let result = 0;
  for (let name in meet) {
    console.log(meet[name]);

    if (name === boss) {
      result += meet[name] * 2
    } else {
    result += meet[name];
    }
  };
  if ((result / Object.keys(meet).length) <= 5) {
    return 'Get Out Now!'
  }
	return 'Nice Work Champ!'
}



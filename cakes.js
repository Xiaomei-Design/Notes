// function cakes(recipe, available) {
//   let arr = [];
//   for(let r in recipe) {
//     for (let a in available) {
//       if (!available.hasOwnProperty(r)) return 0;
//       else {
//         arr.push(available[a]/recipe[r])
//         // console.log(arr);
//         // console.log(arr.sort())
//         return Math.round(arr[0])
//       }
//     }
//   }
// }

cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 

const cakes = (recipe, available) => {
  const numbers = [];
  for (let ingredient in recipe) {
   if(!available[ingredient]) return 0;
  numbers.push(Math.floor(availabel[ingredient] / recipe[ingredient]))
  }
  return Math.min(...numbers)
}

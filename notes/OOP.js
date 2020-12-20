// TODO: write the methods getAge, addJoke and getRandomJoke

const chuck = {
  firstName: 'Chuck',
  
  lastName: 'Norris',
  
  birthDate: new Date('1940-03-10'),
  
  jokes: ['Chuck Norris counted to infinity... Twice.', 'Chuck Norris is the only man to ever defeat a brick wall in a game of tennis'],
  displayInfo() {
    console.log(`My name is ${this.firstName} ${this.lastName} and I have ${this.jokes.length} jokes.`);
  },
  getAge: function() {
    // TODO
    // Hint: to get the current time, you can do: new Date()
    // Hint: to get the birthDate, you can do: this.birthDate
    // Hint: you can subtract 2 dates and you get the number of milliseconds
    let age = (new Date - this.birthDate)/(1000 * 60 * 60 * 24 * 365.25);
    return Math.floor(age);
  },
  addJoke: function(joke) {
    // TODO (don't use return statement)
    this.jokes.push(joke);
  },
  getRandomJoke: function() {
    // TODO
    const randomIndex = Math.floor(Math.random()* this.jokes.length);
    return this.jokes[randomIndex]
  }
};

chuck.displayInfo();

console.log('getAge', chuck.getAge()); // Should return 80 if you are in 2020

chuck.addJoke('Chuck Norris can divide by zero.');
console.log('getRandomJoke', chuck.getRandomJoke());
chuck.addJoke('Chuck Norris kills flies with his gun.');
console.log('getRandomJoke', chuck.getRandomJoke());
chuck.addJoke('Chuck Norris was once in a knife fight, and the knife lost.');
console.log('getRandomJoke', chuck.getRandomJoke());

chuck.displayInfo();

// getAge: function() {
//      const age = Math.floor((new Date() - this.birthDate) /(1000 * 60 * 60 * 24 * 365.25));
//     return age;
//   },
//   addJoke: function(joke){
//     this.jokes.push(joke);
//   },
//   getRandomJoke: function() {
//    const randomIndex = Math.floor(Math.random() * this.jokes.length);
//     return this.jokes[randomIndex];
//   },
// }



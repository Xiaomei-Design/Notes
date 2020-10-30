```javascript
// Example of a VERY simple Monopoly game simulation

let squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

// Creation of the class
class Player {
  // The constructor is the method triggered with the `new` keyword
  constructor(name, color) {
    this.board = new Board()
    this.name = name;
    this.color = color;
    this.position = 0;
    this.cash = 1000;
  }

  // Method move
  move() {
    let dice = 1 + Math.floor(6 * Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash < 0) {
      console.log(`Game over for ${this.name}.`);
    }
  }

  // Method displayInfo
  displayInfo() {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
  }
}

// --- Initialization of players ---
let player1 = new Player('Joaquim', 'red');
let player2 = new Player('Maxence', 'blue');
let player3 = new Player('Mostafa', 'black');

// --- Turn 1  ---
player1.move();
player2.move();
player3.move();

// --- Turn 2  ---
player1.move();
player2.move();
player3.move();

player1.displayInfo();
player2.displayInfo();
player3.displayInfo();

player1.moves = 10;



// die eigenschaften von Bird und Cat in common, in class Animal
  
class Animal {
  constructor (name, color, sound) {   // properties
    this.name = name;
    this.color = color;
    this.sound = sound;
  }
  makeSound() {												// function
    return this.sound;
  }
}


class Cat extends Animal {
  constructor (name, color, sound, numberOfLives) {
    // this.name = name;
    // this.color = color;
    // this.sound = sound; 
    		// already have it in class Animal
    super(name, color, sound)
    this.lives = lives;
  }
  
  makeSound() {
    return 'sound of child class' // here overwrite the default setting in Animal class
  }
  
  eat() {
    
  }
}

const cat1 = new Cat('Kitty', 'blue', 'meow', 9);
const cat2 = new Cat('Garfield', 'blue', 'meow', 7);
console.log(cat.makeSound())

class Bird extends Animal {
  constructor (name, color, sound) {
    this.name = name;
    this.color = color;
    this.sound = sound;
  }
  
  fly () {
    return 'I am flying'
  }

class Dog {
  bark() {
    return 'barking';
  }
}

const dog = new Dog();
console.log(dog.bark());

// Here don't need to write the constructor () {}, because just one property

```


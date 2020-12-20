// ES 6

// var gets hoisted

console.log(message);
var message = 'Hello';

// scope
// global scope
var message = 'hello from global scope';
console.log(message);

// local scope
function sayHelloFromLocalScope() {
    var greeting = 'hello from local scope';
    console.log(greeting)
}
sayHelloFromLocalScope();

//var is either globally scoped or function scoped

// var can also be redeclared
var name = 'tim';
var name = 'jeff';
console.log(name)

// wouldn't work with let
let name = 'tim';
let name = 'jeff'

// let is either globally scoped or blocked scoped

if (true) {
    var name = 'tim';
}
console.log(name); // means var is not block scoped, if var not in an function, then is globally

if (true) {
    let user = 'tim';
}
console.log(user) //  means let is block scoped

function letfromFunction() {
    let password = '1223456';
}
console.log(password)


// Destructuring

let person = {
    name: 'Ironhacker',
    age: 25,
    favoriteShow: 'Devs',
    address: {
        street: 'Lobeckstr.',
        city: 'Berlin'
    }
}
let name = person.name;
let age = person.age;
let favoriteShow = person.favoriteShow;
console.log(name, age, favoriteShow);

// easier way

let {name, age, favoriteShow, hobbies='reading', address} = person;
// console.log(name, age, favoriteShow, hobbies, address.city);

// destructure the city
// access nested structures and aliasing
let {address: {city}} = person;
// let {city} = person.address // just can destructre once
let {address: {city}, name} = person
console.log(city)

let firstName = person.name;
console.log(firstName);

// function output({name, role}) {
//     console.log(name, role)
// }

// const user = 

const name = 'tim'
const password = '12345'

// console.log('name: ', name)
console.log({name}) // shorthand for following
console.log({password})//
console.log({name, password});

const user = {
    name: name,
    password: password,
}
console.log(user)

// Destructure arrays
const numbers = ['one', 'two', 'three', 'four'];
const [first, second, third]= numbers;
console.log(first, second, third);
// second element only
const [, , second] = numbers;
console.log(second)

// const [a, b=2] = [1, 3];
// console.log(b);
const [a, b=2, c, d=1] = [3, 4];
console.log(a, b, c, d) // 3 4 undefined 1

// Spread Operator

// copy
const retlies = ['snake', 'lizard'];
const mammals = ['kitten', 'dog'];
const animals = [...retlies, ...mammals]; // spread out the content of an array
console.log(animals)

// if there are many numbers als argument, get an array returned
// ... turns the things into an array
function rest(...numbers) {
    console.log(numbers)
}

rest (1, 3, 5, 0, 3, 5, 6, 2, 5)

function manyStr(...string) {
    console.log(string)
}

manyStr('hi', 'nihao', 'xiaomaozi', 'shenme', 'chishenme','212', [1, 2, 3], {piano: 'gut', cello: 'gut'})
manyStr('Hello World!')

const str = "Hello World!"

// Using the spread, return an array of all characters in `str` upperCased and reversed
//
const reversedUppercase = [...str.toUpperCase()].reverse()
console.log(reversedUppercase);
// [ '!', 'D', 'L', 'R', 'O', 'W', ' ', 'O', 'L', 'L', 'E', 'H' ]
console.log('hello');

// arrow functions

const numbers = [1, 2, 3, 4, 5];


const evens = numbers.filter(function(number) {
    return number % 2 === 0;
})
console.log(number)

const evens = numbers.filter(number => number % 2 === 0);

const greet = (name, str) => name + str
const greet = () => 'hello';
// const greet = name => name + '!'

const greeting = greet();
console.log(greeting)


const increment = (number, increment = 1) => number + increment
const result = increment(2, 3)
// increment(2, 3); // => 5;
console.log(result)


// ternary operator

const isEvenOrOdd = number => {
    if (number % 2 === 0) return 'is even'
    else return 'is odd';
    // this is true ? do this : do another thing
    return number % 2 === 0 ? 'is even' : 'is odd'

    // technically you can nest more condition, but its unreadable
    return number % 2 === 0 ? 'is even' : number === 3 ? 'number is 3' : 'another'
}
const userName = 'jeff';
const userX = userName === 'jeff' ? 'jeff' : 'timmy'
// it will return an value, and you can assign it to a variable

console.log(isEvenOrOdd(3))

// arrow functions and this

const human = {
    age: 0,
    display: function() {
        console.log(this)
    }
}

human.display();
console.log(this);

// ?????????????
class Person {
    constructor() {
        this.age = 0;
    }

    growUp() {
        setInterval(function(){
            console.log(this) // window object
            this.age++;
            // console.log(this.age)
        }, 1000)
    }
}

const person = new Person();
person.growUp()

class Person {
    constructor() {
        this.age = 0;
    }

    growUp() {
        console.log(this) // window object
        let that = this; // correct context
        setInterval(function(){
            that.age++;
            // console.log(this.age)
        }, 1000)
    }
}

const person = new Person();
person.growUp()


class Person {
    constructor() {
        this.age = 0;
    }
    // solution 2: bind this
    growUp() {
        function callback() {
            this.age++;
            console.log(this.age)
        }
        callback = callback.bind(this);
        // callback.bind(this);
        setInterval(callback, 1000)
    }
}

const person = new Person();
person.growUp()


class Person {
    constructor() {
        this.age = 0;
    }
    // solution 3: use an arrow function
    growUp() {
        console.log(()=>{
            console.log(this);
            this.age++;
            console.log(this.age);
        }, 1000)
    }
}

const person = new Person();
person.growUp()


// Promises is a Javascript object representing the eventual

// completion or failure of an asynchronous operation

function createRandomNumber(min, max) {
    return new Promise ((resolve, reject) => {
        if(arguments.length !== 2) { // arguments is argumnet object
            return reject(new Error('Invalid number of args!')) //?? this is the error message you will use later
        }
        setTimeout(()=>{
            resolve(Math.floor(Math.random()*(max-min + 1) + min)) // ???
        }, 3000)
    })
}

createRandomNumber(1, 4) // this would be calling database
    .then(response => {
        console.log(response);
        // anotherAsyncCall(response).then(result => {

        // })
}).catch(err => {
        console.log(err.message);
});

// async await
async function getNumber() {
    // try catch for erroor handling
    try {
        const number = await createRandomNumber(1); // wait untill this finished
        console.log(number)
    } catch (error) {
        console.log('The following error occured: ', error.message) // the message is in the promise new Error defined
    }
    
}

getNumber()


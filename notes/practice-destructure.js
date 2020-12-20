// Objects

const car = {
	make: 'Volvo',
	year: 1995,
	engine: {
		fuel: 'petrol',
		hp: 80
	}
}

const {make, year} = car;
// extract the make and year from the car in one line

console.log(make, year)

// extract the fuel and hp from the car in one line

// const {fuel, hp} = car.engine
const {engine: {fuel, hp}} = car;
console.log(fuel, hp);


// Arrays

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Extract the first two values
const [zero, one] = numbers
console.log(zero, one); // 0 1

// Extract all the values but the first one from the array
//
const [, a, b, c, d, e, f, g, h]= numbers
console.log(a, b, c, d, e, f, g, h); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
const [, ...greaterThan0] = numbers;
console.log(greaterThan0);

// Strings

const str = "Hello World!"

// Using the spread, return an array of all characters in `str` upperCased and reversed
//
const reversedUppercase = [...str.toUpperCase()].reverse()
console.log(reversedUppercase);
// [ '!', 'D', 'L', 'R', 'O', 'W', ' ', 'O', 'L', 'L', 'E', 'H' ]
console.log('hello');



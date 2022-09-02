// Name the eight data types in JavaScript.
// Understand the difference between single, double, and backtick quotes.
// Embed a variable/expression in a string.
// Understand what a method is.
// Name the three logical operators.
// Understand what the comparison operators are.
// Understand what conditionals are.
// Understand what nesting is.
// Understand what truthy and falsy values are.

// A value in JavaScript is always of a certain type
// 8 basic types in JavaScript
// - Number
// - BigInt
// - String
// - Boolean
// - "null" - means empty
// - "undefined" - means value not assigned
// - Objects and Symbols - all other types are called primitives. Objects can store more complex data.
// - the typeof operator - returns the type of the argument.

// Strings - single piece of text. Very fundamental

const string = "The revolution will not be televised.";

console.log(string);

const name = "Anthony";

const greeting = `Hello ${name}`;

console.log(greeting);

// Working with user inputs

const button = document.querySelector("button");
function greet() {
  const userName = prompt("What is your name?");
  alert(`Hello ${userName}, nice to meet you!`);
}
button.addEventListener("click", greet);

// every string and number has the aboloty to do the Number(myString) & myNum.toString()

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."

const moreOutput = `I like the song.
I give it a score of 90%`;
console.log(moreOutput);

// To have the equivalent output using a normal string you'd have to include line break characters (\n) in the string.

const evenMore = "I like the song. \nI give it a score of 90%";

console.log(evenMore);
//!!
// String Methods - Help you work with strings.
//!!

// length

let txt = "Anthony Pantaleo";
let txtlength = txt.length;

// Extracting String Parts

// slice() extracts a part of a string and returns the extracted part in a new string. Takes two slice(start, end)

let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);

// if a parameter is negative the position is counted from the end of the string.
// if you omit the second parameter, the method will slice out the rest of the string.

// substring() uis the same except that start and end values less than 0 are treated as 0 in substring()

// substr() the difference is that the second parameter specifies the length of the extracted part.

let fruit = str.substr(7, 6);

//can go backwards with just one negative.

// replace() replaces a specified value with another value in a string

let rplc = "Please visit Microsoft and Microsoft!";
let newText = rplc.replace("Microsoft", "Amazon");

// replace() does not change the string it is called on. Returns a new string, and replaces only the first match.

// to replace all matches use a regular expression with a /g flag

let rplcall = rplc.replace(/Microsoft/g, "Amazon");

// toUpperCase() & toLowerCase()

// concat() joins two or more strings

let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);

// trim() removes whitespace from both sides of a string.
// trimStart() only removes it from the start of a string.
// trimEnd() removes it from the end only.

// padStart() and padEnd() supports padding at the beginning and end of a string.

let pad = "5";
let padded = pad.padStart(3, "x");

// You can padd a number too!

let numb = 5;
let texter = numb.toString();
let numbPadded = texter.padStart(4, "0");

// padEnd() does the same thing for the end of the string.

// You can extract string characters using charAt(position)

// charCodeAt() returns the unicode of a character

// You can also access specific positions

let stringy = "Hello World!, how are you?";
let char = stringy[0];

// This is read ONLY, does NOT write.

// Converting a String to an Array using the split() method

console.log(stringy.split(","));

// looks for all of the commas
// if the seperator is "" the returnned array will be an array of single characters.

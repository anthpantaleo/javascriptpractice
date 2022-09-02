// function add7(num) {
//   return num + 7;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function capitalize(str) {
//   const firstChar = str[0].toUpperCase();
//   const spliced = str.slice(1).toLowerCase();
//   return `${firstChar + spliced}`;
// }

// function lastLetter(str) {
//   return str.slice(-1);
// }

// Fizz buzz
// When a user inputs a number
// Loop from 1 to the entered number
// If the current number id divisible by 3 then print "Fizz"
// If the current number is divisible by 5 then print "Buzz"
// If the current number is divisible by 3 and 5 print "FizzBuzz"
// Otherwise print the current number/

let answer = parseInt(
  prompt("Please enter the number you would like to Fizzbuzz.")
);

// Wrapped in a parseInt so that we can turn the string to a number.

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

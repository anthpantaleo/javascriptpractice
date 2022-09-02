// Conditionals

// Very often when you want to write code, you want to perform different actions for different decisions.
// Use if to specify a block of code to be executed if a specified condition is true.
// use else to tp specify a block of code to be executed if the same condition is false.
// use else if to specify a new condition to test, if the first condition is false
// use switch to specify many alernative blocks of code ot be executed.

// Syntax

// if(condition){
//     block of code to be executed if the condition is true
// }

let hour = 18;

if (hour < 18) {
  greeting = "Good day.";
  console.log(greeting);
}

// use the else statement to specify a block of code to be exectued if the condition is false.

// if (condition) {
//     //  block of code to be executed if the condition is true
//   } else {
//     //  block of code to be executed if the condition is false
//   }

if (hour < 18) {
  greet = "Good day.";
} else {
  greet = "Good evening.";
}
console.log(greet);

// Use the else if statement to specify a new condition if the first condition is flase.

// if (condition1) {
//     //  block of code to be executed if condition1 is true
//   } else if (condition2) {
//     //  block of code to be executed if the condition1 is false and condition2 is true
//   } else {
//     //  block of code to be executed if the condition1 is false and condition2 is false
//   }

time = 19;

if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting);

fruits = "Banana";

switch (fruits) {
  case "Banana":
    // alert("Hello");
    break;

  case "Apple":
    // alert("Welcome");
    break;
}

// Logical Operators
// || OR, && AND, ! NOT, ?? Nullish

let currentHouse = 9;

if (currentHouse < 10 || currentHouse > 18) {
  //   alert("The office is closed.");
}

// We can pass more conditions

let currentHour = 12;
let isWeekend = true;
if (currentHour < 10 || hour > 18 || isWeekend) {
  console.log("The office is closed.");
}

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert(firstName || lastName || nickName || "Anonymous");

// OR returns the first truthy statement.

// If all variables were falsy, then "Anonymous" would show up.

// Short-circuit evaluation.

// Another feature of OR || operator is the so-called “short-circuit” evaluation.

// It means that || processes its arguments until the first truthy value is reached, and then the value is returned immediately, without even touching the other argument.

// The importance of this feature becomes obvious if an operand isn’t just a value, but an expression with a side effect, such as a variable assignment or a function call.

// In the example below, only the second message is printed:

true || alert("not printed");
false || alert("printed");

// In the first line, the OR || operator stops the evaluation immediately upon seeing true, so the alert isn’t run.

// Sometimes, people use this feature to execute commands only if the condition on the left part is falsy.

// && AND Operator

// result = a && b;

// alert( true && true );   // true
// alert( false && true );  // false
// alert( true && false );  // false
// alert( false && false ); // false

// AND && finds the first falsy value

// Precedence of AND && is higher than OR ||
// The precedence of AND && operator is higher than OR ||.

// So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d).

// !(Not)

// result = !value

// The operator accepts a single argument and does the following:

// Converts the operand to boolean type: true/false.
// Returns the inverse value.
// For instance:

// alert( !true ); // false
// alert( !0 ); // true

// alert( !!"non-empty string" ); // true
// alert( !!null ); // false

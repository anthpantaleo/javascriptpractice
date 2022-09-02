// Functions!

// Define and invole different kinds of functions.
// use the return value
// explain function scope

function myFunction() {
  console.log("Hello");
}

myFunction();

const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'

// If you're writing a function and want to support optional parameters, you can specify default values by adding = after the name of a parameter, followed by the default value

function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

hello("Ari"); // Hello Ari!
hello(); // Hello Chris!

// window.addEventListener("keydown", (event) => {
//   console.log(`You pressed "${event.key}".`);
// });

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener(
  "keydown",
  (event) => (output.textContent = `You pressed "${event.key}".`)
);

// Scope

// When you create a function the variables and other things defined inside the function are inside their own separate scope, meaning
// that they are locked away in their own separate compartments, unreachable from code outside the functions.
// Top level outside your functions is called global scope. Available everywhere in the code.

// Return values are the values that a function returns when it has completed.
//

function favoriteAnimal(animal) {
  console.log(animal + " is my favorite animal!");
}

favoriteAnimal("Cat");

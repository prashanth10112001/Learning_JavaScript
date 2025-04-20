### HTML

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Page</title>
  </head>
  <body>
    <script src="/script.js"></script>
  </body>
</html>

```

### CSS

```CSS
body {
  background-color: aliceblue;
}

```

### JavaScript

```JS
// Functions and Methods

// Functions in JS
// Block of code that performs a specific task, can be invoked whenever needed

// Examples of functions

console.log("hello");
"abc".toUpperCase();
[1, 2, 3].push(4);

// 1. Function Declaration without Parameters
function myFunc() {
  // code to be executed
  console.log("hello world (:=)");
}

myFunc(); // Invoking the function / function call with arguments

// 2. Function Declaration with Parameters
function myFunc2(param1, param2) {
  // code to be executed
  console.log(param1 + param2);
}

myFunc2(1, 2); // Invoking the function / function call with arguments
myFunc2("hello", " world"); // Invoking the function / function call

// 3. Function Declaration with Return Value and parameters
function myFunc3(param1, param2) {
  // code to be executed
  return param1 + param2;
}

console.log(myFunc3(1, 2)); // Invoking the function / function call with arguments
console.log(myFunc3("hello", " world")); // Invoking the function / function call

// functiion params are local variables of the function which is block scope

// 4. Arrow Function
const myFunc4 = (param1, param2) => {
  // code to be executed
  return param1 + param2;
};
console.log(myFunc4(1, 2)); // Invoking the function / function call with arguments
console.log(myFunc4("hello", " world")); // Invoking the function / function call

// 5. Arrow Function with Implicit Return
const myFunc5 = (param1, param2) => param1 + param2; // no need for curly braces and return statement
console.log(myFunc5(1, 2)); // Invoking the function / function call with arguments
console.log(myFunc5("hello", " world")); // Invoking the function / function call
console.log(myFunc5); // prints the function definition

// Question 1 : Create a function using the "function" keyword that takes a string as an argument and returns the number of vowels in the string.

function countVowels(str) {
  let count = 0;
  for (const i of str) {
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
      count++;
    }
  }
  return count;
}

console.log(countVowels("hello world")); // 3
console.log(countVowels("aeiou")); // 5

const countVowels2 = (str) => {
  let count = 0;
  for (const element of str) {
    if (
      element === "a" ||
      element === "e" ||
      element === "i" ||
      element === "o" ||
      element === "u"
    ) {
      count++;
    }
  }
  return count;
};

console.log(countVowels2("hello world")); // 3
console.log(countVowels2("aeiou")); // 5

// Methods in JS

// for Each loop in Arrays
// it is actually a method toUpperCase() is a method of the String object
// it is a function that is associated with the object

// arr.forEach(callBackFunction)

// CallbackFunction : here it is a function to execute for each element in the array
// it is a function that is passed as an argument to another function
// it is a function that is called inside another function

function abc() {
  console.log("hello world (:=)");
}

function myFunc6(abc) {
  return abc;
}

console.log(myFunc6(abc)); // Invoking the function / function call with arguments

// 1. forEach method only used for arrays
// 2. forEach method takes a callback function as an argument
// 3. forEach method executes the callback function once for each element in the array is -- Higher Order Function as they take a function as an argument or return a function as a result
// 4. forEach method does not return anything (undefined) but executes the callback function for each element in the array

const arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) {
  console.log(val); // prints each element of the array
});

arr.forEach((val) => console.log(val)); // prints each element of the array

const calc = (val) => {
  console.log(val * 2); // returns the value but does not print it
};

arr.forEach(calc); // prints each element of the array after multiplying it by 2

// 2. Map method
// 1. Map method is used to create a new array by applying a function to each element of the original array
// 2. Creates a new array with the results of some operation . The value its callback returns are used to form the new array

let newArr = arr.map((val) => {
  console.log(val); // prints each element of the array
  return val * 3; // returns the value but does not print it
});

console.log(newArr); // prints the new array after multiplying each element of the original array by 2

// 3. Filter method
// 1. Filter method is used to create a new array with all elements that pass the test implemented by the provided function
// 2. Creates a new array with the elements that pass the test only true implemented by the provided function
// 3. Filter method does not modify the original array

let newArr2 = arr.filter((val) => {
  console.log(val); // prints each element of the array
  return val > 2; // returns the value but does not print it
});
console.log(newArr2); // prints the new array after filtering the original array with the condition val > 2

// 4. Reduce method
// 1. Reduce method is used to execute a reducer function (that you provide) on each element of the array, resulting in a single output value

// 2. The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value
// 3. The reduce() method executes the reducer function once for each element present in the array, excluding undefined
// 4. The reduce() method returns a single value: the function's accumulated result
// 5. The reduce() method does not execute the function for empty elements

const sumAvg = arr.reduce((acc, cval) => {
  return acc + cval;
});

console.log(sumAvg); // prints the sum of the array elements

// 6. The reduce() method can take an initial value as a second argument, which will be used as the first argument to the first call of the callback function
const sumAvg2 = arr.reduce((acc, cval) => {
  return acc + cval;
}, 10); // 0 is the initial value of the accumulator

console.log(sumAvg2); // prints the sum of the array elements

// Question 2 : We are given array of marks of students . Filter out of the marks of students that scored 90+.

let marks = [45, 67, 89, 90, 100, 78, 56, 34, 23, 12, 11, 10];

let marks90 = marks.filter((val) => {
  return val >= 90;
});

console.log(marks90); // prints the new array after filtering the original array with the condition val > 90

```

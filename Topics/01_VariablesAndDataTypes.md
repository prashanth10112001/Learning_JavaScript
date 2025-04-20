## HTML

```html
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

## CSS

```CSS
body{
    background-color: aliceblue;
}

```

## JavaScript

```JS

// JavaScript code
// This is a single line comment
console.log("Hello world");

// Variables in JavaScript
name = "Prashanth";
console.log(name);

age = 25;
console.log(age);

pi = 3.14;
console.log(pi);

x = null;
console.log(x);

y = undefined;
console.log(y);

isTrue = true;
console.log(isTrue);

// Dynamically Typed language

age = "twenty five";
console.log(age);

// Case sensitive
Age = "twenty three";
console.log(Age);

// let is a block-scoped variable declaration and can be reassigned but cannot be redeclared in the same scope
let ram = 25;
// let ram = 40; // This will throw an error
ram = 30;
console.log(ram);

let b;
console.log(b); // undefined

// var is a function-scoped/global variable declaration and can be reassigned
var shyam = 25;
shyam = 30;
console.log(shyam);

// const is a block-scoped variable declaration and cannot be reassigned
const PI = 3.14;
// PI = 30; // This will throw an error
console.log(PI);

// Block scope
{
  let a = 10;
  console.log(a); // 10
}
{
  let a = 20;
  console.log(a); // 20
}

// console.log(a); // This will throw an error

// Global Scope
var globalVar = "I am a global variable";
console.log(globalVar); // I am a global variable
{
  console.log(globalVar); // I am a global variable
}

// Data types
// Primitive data types
let str = "Hello"; // String
let num = 10; // Number
let bool = true; // Boolean
let und = undefined; // Undefined
let nul = null; // Null
let sym = Symbol(); // Symbol
let bigInt = BigInt(2112123); // BigInt 123n

// non-primitive/Reference data types
let arr = [1, 2, 3]; // Array is a collection of elements
let obj = { a: 1, b: 2 }; // Object is a collection of key-value pairs
let func = function () {}; // Function is a block of code that can be called when needed
let date = new Date(); // Date is a built-in object that represents dates and times
console.log(arr); // [1, 2, 3]
console.log(obj); // { a: 1, b: 2 }
console.log(func); // [Function: <anonymous>]

// typeof operator
console.log(typeof str); // string
console.log(typeof num); // number
console.log("null", typeof null); // object
console.log("undefined", typeof und); // undefined

// Objects
// Objects of const cannot be reassigned but can be mutated , by changing the properties of the object
const student = {
  name: "Paisa",
  age: 23,
  isStudent: true,
};
console.log(student); // { name: 'Paisa', age: 23, isStudent: true }
console.log(student.age); // 23
console.log(student["isStudent"]); // true
student.isStudent = false; // Update the value of isStudent
console.log(student); // { name: 'Paisa', age: 23, isStudent: false }
student["age"] = 20; // Update the value of age
console.log(student); // { name: 'Paisa', age: 20, isStudent: false }

// Addition with strings
let str1 = "1";
let str2 = "2";
let str3 = str1 + str2; // Concatenation
console.log(str3); // 12
let num1 = 1;
let num2 = 2;
let num3 = num1 + num2; // Addition
console.log(num3); // 3
num1 = 1;
num2 = "3";
let num4 = num1 + num2; // Concatenation
console.log(num4); // 13



```

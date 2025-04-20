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
// Comments
// 1. Single-line comment
// 2. Multi-line comment
/*
This is a multi-line comment
This is a multi-line comment
This is a multi-line comment
*/

// Operators and Conditional Statements

// 1. Arithmetic Operators / Unary Operators
let a = 10;
let b = 5;
console.log(a + b); // 15 Addition
console.log(a - b); // 5 Subtraction
console.log(a % b); // 0 Modulus
console.log(a * b); // 50 Multiplication
console.log(a / b); // 2 Division
console.log(b ** 2); // 25 Exponentiation

// 2. Relational Operators / Comparison Operators
console.log(a > b); // true (greater than)
console.log(a < b); // false (less than)
console.log(a >= b); // true (greater than or equal to)
console.log(a <= b); // false (less than or equal to)
console.log(a === b); // false (strict equality both value and type)
console.log(a !== b); // true (strict inequality)
console.log(a == b); // false (loose equality only value bu not type)
console.log(a != b); // true (loose inequality)

// 3. Logical Operators / Boolean Operators
console.log(a && b); // 50
console.log(a || b); // true
console.log(!a); // false
console.log(!b); // true

// 4. Bitwise Operators / Binary Operators
console.log(a & b); // 0 Bitwise AND
console.log(a | b); // 15 Bitwise OR
console.log(a ^ b); // 15 Bitwise XOR
console.log(~a); // -11 Bitwise NOT (inverts all bits)
console.log(a === b ? "Equal" : "Not Equal"); // Not Equal

// 5. Ternary Operator / Conditional Operator
console.log(a > b ? "A is greater" : "B is greater or equal"); // a > b ? true : false
// A is greater

// 6. Unary Operator / Unary Plus
console.log(+a); // 10 (unary plus)
console.log(-a); // -10 (unary minus)
console.log(++a); // 11 (pre-increment)
console.log(--a); // 10 (pre-decrement)
console.log(a++); // 10 (post-increment)
console.log(a); // 11 (after post-increment)

// 7. Assignment Operators
let c = 10;
console.log(c); // 10
c += 5; // c = c + 5
console.log(c); // 15
c -= 5; // c = c - 5
console.log(c); // 10
c *= 2; // c = c * 2
console.log(c); // 20
c /= 2; // c = c / 2
console.log(c); // 10
c %= 3; // c = c % 3
console.log(c); // 1
c **= 2; // c = c ** 2
console.log(c); // 1

// Conditional Statements

// 1. if statement
if (a > b) {
  console.log("A is greater");
}
if (b > a)
  // for single line if statement no curly braces required
  console.log("B is greater or equal");

// A is greater

// 2. if-else statement
if (a > b) {
  console.log("A is greater");
} else {
  console.log("B is greater");
}
// A is greater

// 3. if-else-if statement
if (a > b) {
  console.log("A is greater");
} else if (b > a) {
  console.log("B is greater");
} else {
  console.log("A and B are equal");
}
// B is greater

// 4. switch statement
switch (a) {
  case 10:
    console.log("A is 10");
    break;
  case 20:
    console.log("A is 20");
    break;
  default:
    console.log("A is not 10 or 20");
    break;
}
// A is not 10 or 20

// Question 1: Get user a message using alert
alert("Page is to check number is even or odd");

// Question 2: Get user to input a number using prompt and check if it is even or odd
let number = prompt("Enter a number:");
if (number % 2 === 0) {
  console.log("Even number", number);
} else {
  console.log("Odd number", number);
}

// Question 3: Get user to input a score of science using prompt and check its grade
let score = prompt("Enter your science score : ");
if (score >= 80 && score <= 100) {
  console.log("A+");
} else if (score >= 70 && score < 80) {
  console.log("A");
} else if (score >= 60 && score < 70) {
  console.log("B");
} else if (score >= 50 && score < 60) {
  console.log("C");
} else {
  console.log("F");
}

```

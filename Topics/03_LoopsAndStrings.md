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
// Loops And Strings

// Loops in JavaScript

// 1. For Loop
for (let i = 0; i <= 4; i++) {
  console.log("for index is: ", i);
}

// infinite loop

// for (let i = 0; i <= 4; i--) {
//   console.log("index is: ", i);
// }

// for(;;){
//   console.log("index is: ", i);  // infinite loop
// }

// 2. While Loop
let i = 0;
while (i <= 4) {
  console.log("while index is: ", i);
  i++;
}

// 3. Do While Loop
// -- do while atleast runs one iteration even if the condition is false
let j = 0;
do {
  console.log("do while index is: ", j);
  j++;
} while (j <= 4);

// 4. For of Loop - used for Strings and Arrays
// -- for of loop is used to iterate over iterable objects like arrays, strings, etc.
const arr = [1, 2, 3, 4, 5];
for (let i of arr) {
  console.log("For of index is: ", i);
}

const str = "hello";
for (let i of str) {
  console.log("For of string index is: ", i);
}

// 5. For in Loop - used for objects
// -- for in loop is used to iterate over the properties of an object

const student = {
  name: "Ram",
  age: 23,
  city: "Patna",
  marks: 87,
};

for (let key in student) {
  console.log("Student keys are : ", key);
  console.log("Student values are : ", student[key]);
  console.log("Student values using dot operator are : ", student.key); // undefined as key is not a property
}

// Question 1 : Print all even numbers from 0 to 100
for (let i = 0; i <= 100; i++) {
  i % 2 == 0 && console.log(i);
}

// Question 2 : Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

let num = Math.floor(Math.random() * 100) + 1;
let guess = prompt("Guess the number : ");
while (num != guess) {
  if (num > guess) {
    alert("Your guess is low. Try again.");
    guess = prompt("Guess the number : ");
  } else {
    alert("Your guess is high. Try again.");
    guess = prompt("Guess the number : ");
  }
}
alert("Congratulations! You guessed the number correctly.");

// Strings in JavaScript

// -- Strings are immutable in JavaScript. Once a string is created, it cannot be changed. However, we can create a new string by concatenating two or more strings together.
// -- Strings are zero indexed. The first character of a string is at index 0, the second character is at index 1, and so on.
// -- Strings are iterable. We can use for of loop to iterate over the characters of a string.
// -- Strings are mutable. We can use string methods to modify the string.
// -- Strings are indexed. We can access the characters of a string using the index.
// -- Strings are immutable. Once a string is created, it cannot be changed. However, we can create a new string by concatenating two or more strings together.
// -- Strings are case sensitive. The case of the characters in a string is significant.

// -- Strings are compared using the ASCII values of the characters. The ASCII value of a character is its numerical representation in the ASCII table.

// Methods to create strings
// 1. Using single quotes
let str2 = "Hello";
// 2. Using double quotes
let str1 = "hello";
console.log(str1, str2);

// 3. Get length
console.log("Length of string is: ", str1.length); // 5

// 4. Get character at index
console.log("Character at index 0 is: ", str1.charAt(0)); // h
console.log("Character at index 1 is: ", str1[1]); // e

// 5. Using backticks template literals
// A way to have embedded expressions in strings
// To create strings by doing substitution of placeholders is "String Interpolation"
let str3 = `Hello ${str1}`; // Hello hello
console.log(str3); // Hello hello

// 6. Escape characters
// -- Escape characters are used to represent special characters in a string. For example, to represent a single quote in a string, we can use the escape character \.

console.log("Hello 'World'"); // Hello 'World'
console.log('Hello "World"'); // Hello "World"
console.log("Hello \nWorld"); // Hello
console.log("Hello \tWorld"); // Hello
// \n is a new line character
// \t is a tab character
// \\ is a backslash character
// \' is a single quote character
// \" is a double quote character

// 7. String methods / Functions
// to ( uppercase ) and ( lowercase )
console.log("To Uppercase: ", str1.toUpperCase()); // HELLO
console.log("To Lowercase: ", str1.toLowerCase()); // hello

// to ( trim )
// -- to remove whitespace from the beginning and end of a string
let str4 = "   Hello World   ";
console.log("Trimmed string is: ", str4.trim()); // Hello World

// to ( slice )
// -- to extract a part of a string and return it as a new string
// -- The slice() method takes two arguments: the starting index and the ending index (not included).
let str5 = "Hello World";
console.log("Slice from index 0 to 5: ", str5.slice(0, 5)); // Hello
console.log("Slice from index 6 to 11: ", str5.slice(6, 11)); // World

// to ( replace )
// -- to replace a part of a string with another string only first occurrence
let str6 = "Hello World";
console.log(
  "Replace 'World' with 'Universe': ",
  str6.replace("World", "Universe")
); // Hello Universe

// to ( concat )
// -- to concatenate two or more strings together
let str7 = "Hello";
let str8 = "World";
console.log("Concatenated string is: ", str7.concat(" ", str8)); // Hello World

// to ( split )
// -- to split a string into an array of substrings based on a separator
let str9 = "Hello World";
console.log("Split string into array: ", str9.split(" ")); // ['Hello', 'World']

// to ( join )
// -- to join an array of strings into a single string using a separator
let arr1 = ["Hello", "World"];
console.log("Join array into string: ", arr1.join(" ")); // Hello World

// to ( include )
// -- to check if a string contains a substring
let str10 = "Hello World";
console.log("Does string contain 'World'? ", str10.includes("World")); // true

// Question 1 : Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length

let fullname = prompt("Enter the fullname: ");
alert(`Your username is @${fullname}${fullname.length}`);

```

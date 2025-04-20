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
// Arrays - Collections of items , mutable, ordered, indexed by numbers

// Creation of an array
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["apple", 1, true, null, undefined, { name: "John" }];
let emptyArray = [];
console.log(fruits);

// Accessing array elements
console.log(fruits[0]); // apple
console.log(fruits[10]); // undefined (out of bounds)
console.log(fruits[-1]); // undefined (negative index)

// length of an array
console.log(fruits.length); // 3

// typeof an array
console.log(typeof fruits); // object

// Changeing array elements
fruits[0] = "kiwi";
console.log(fruits); // [ 'kiwi', 'banana', 'orange' ]

// Looping through an array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // kiwi, banana, orange
}

// Loop through for of
for (let fruit of fruits) {
  console.log(fruit); // kiwi, banana, orange
}

// Question 1 : For a given array with marks of students [85,97,44,37,76,60] . FInd the average marks of the entire class
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let mark of marks) {
  sum += mark;
}
console.log("Average Marks: ", sum / marks.length);

// Question 2 : For a given array with prices of 5 items -> [250,645,300,900,50]. ALl items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
let prices = [250, 645, 300, 900, 50];
console.log("Original Prices: ", prices);
for (let i = 0; i < prices.length; i++) {
  prices[i] = prices[i] * 0.9;
}
console.log("Final Prices: ", prices); // [ 225, 580.5, 270, 810, 45 ]

// Array Methods

// 1. push() - Add an item to the end of the array
fruits.push("grape");
console.log(fruits); // [ 'kiwi', 'banana', 'orange', 'grape' ]

// 2. pop() - Remove an item from the end of the array
let lastFruit = fruits.pop();
console.log(lastFruit); // grape
console.log(fruits); // [ 'kiwi', 'banana', 'orange' ]

// 3. toString() - Convert an array to a string
console.log(fruits.toString()); // kiwi,banana,orange

// 4. join() - Convert an array to a string with a separator
let joinArray = fruits.join("-");
console.log(joinArray); // kiwi-banana-orange

// 5. unshift() - Add an item to the beginning of the array
fruits.unshift("kiwi");
console.log(fruits); // [ 'kiwi', 'kiwi', 'banana', 'orange' ]

// 6. shift() - Remove an item from the beginning of the array
let firstFruit = fruits.shift();
console.log(firstFruit); // kiwi
console.log(fruits); // [ 'kiwi', 'banana', 'orange' ]

// 7. indexOf() - Find the index of an item in the array
let index = fruits.indexOf("banana");
console.log(index); // 1

// 8. lastIndexOf() - Find the last index of an item in the array
let lastIndex = fruits.lastIndexOf("banana");
console.log(lastIndex); // 1

// 9. includes() - Check if an array contains an item
let hasBanana = fruits.includes("banana");
console.log(hasBanana); // true

// 10. reverse() - Reverse the order of the array
fruits.reverse();
console.log(fruits); // [ 'orange', 'banana', 'kiwi' ]

// 11. sort() - Sort the array in lexicographical order
let sortedFruits = fruits.sort();
console.log(sortedFruits); // [ 'banana', 'kiwi', 'orange' ]
console.log(fruits); // [ 'banana', 'kiwi', 'orange' ]

// 12. slice() - Create a new array from a portion of the original array
let slicedFruits = fruits.slice(1, 3); // from index 1 to 3 (not inclusive)
console.log(slicedFruits); // [ 'banana', 'kiwi' ]

// 13. splice() - Add or remove items from an array
let splicedFruits = fruits.splice(1, 1, "mango", "grape"); // remove 1 item from index 1 and add "mango" and "grape"
console.log(splicedFruits); // [ 'kiwi' ]
console.log(fruits); // [ 'banana', 'mango', 'grape', 'orange' ]

// 14. concat() - Merge two or more arrays
let moreFruits = ["pear", "peach"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // [ 'banana', 'mango', 'grape', 'orange', 'pear', 'peach' ]
console.log(fruits); // [ 'banana', 'mango', 'grape', 'orange' ]

// Question 1

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);

companies.shift(); // remove first element
console.log(companies); // [ 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix' ]
companies.splice(1, 1, "Ola");
console.log(companies); // [ 'Microsoft', 'Ola', 'Google', 'IBM', 'Netflix' ]
companies.push("Amazon");
console.log(companies); // [ 'Microsoft', 'Ola', 'Google', 'IBM', 'Netflix', 'Amazon' ]

```

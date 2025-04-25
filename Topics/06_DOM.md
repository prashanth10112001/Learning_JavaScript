### HTML

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- CSS -->
    <link rel="stylesheet" href="style.css" />
    <!--  -->
    <title>My Page</title>
  </head>
  <body>
    <div class="para">New Topic DOM</div>
    <h1 id="heading">DOM Concepts</h1>
    <p class="para">Lets learn about the DOM concepts in JavaScript</p>
    <button>Click to learn :)</button>

    <div class="container">
      <h2>Hello World</h2>
      <p>This is a paragraph</p>
    </div>

    <!-- JavaScript -->
    <script src="/script.js"></script>
    <!--  -->
  </body>
</html>


```

### CSS

```CSS
body {
  background-color: skyblue;
}


```

### JavaScript

```JS
// DOM is a Document Object Model

console.log("Hello, World!");

// Window is a global object in the browser environment
// It has all functions like alert, prompt, etc.
console.log(window);

window.console.log("Now using with window object");

/*
DOM is a Document object model
It is a representation of the HTML document  in the browser
It is a tree structure of the HTML document
It is used to access and manipulate the HTML document
window -> document -> html -> head -> body
*/

// Document is a property of the window object contains all the details about the HTML document along with the URLs, title, etc.
// .log is used to display the object in a single line as HTML
console.log(window.document);

// .dir is used to display the object in a tree structure
console.dir(window.document);

// document is a property of the window object to access the HTML document to manipulate it
document.body.childNodes[1].innerText = "Hacked, World!";

// DOM Manipulation

// 1. Get the element by ID styled with '#' in css and id="heading" in HTML , id's are unique in the HTML document
console.log(document.getElementById("heading"));
document.getElementById("heading").innerText = "DOM manipulation";

// 2. Get the element by class name styled with '.' in css and class="heading" in HTML , class names are not unique in the HTML document
console.log(document.getElementsByClassName("para"));
document.getElementsByClassName("para")[0].innerText = "DOM manipulation";

// 3. Get the element by tag name styled with 'tagname' in css and <tagname> in HTML , tag names are not unique in the HTML document
console.log(document.getElementsByTagName("button"));
document.getElementsByTagName("button")[0].innerText = "DOM manipulation";

// 4. Get the element by query selector styled with '#' in css and id="heading" in HTML , id's are unique in the HTML document returns the first element that matches the selector
console.log(document.querySelector("#heading"));
document.querySelector("#heading").innerText =
  "DOM manipulation with query selector for id";

console.log(document.querySelector(".para"));
document.querySelector(".para").innerText =
  "DOM manipulation with query selector for class";

console.log(document.querySelector("button"));
document.querySelector("button").innerText =
  "DOM manipulation with query selector for tag name";

// 5. Get the element by query selector all styled with '#' in css and id="heading" in HTML , id's are unique in the HTML document returns all elements that match the selector
console.log(document.querySelectorAll(".para"));

// Properties of the document object

// 1. tagName
console.log(document.querySelector("#heading").tagName); // returns the tag name of the element

// 2. className
console.log(document.querySelector("#heading").className); // returns the class name of the element

// 3. id
console.log(document.querySelector("#heading").id); // returns the id of the element

// 4. innerText
console.log(document.querySelector("#heading").innerText); // returns the inner text of the element

// 5. innerHTML
console.log(document.querySelector("#heading").innerHTML); // returns the inner HTML of the element

// 6. outerHTML
console.log(document.querySelector("#heading").outerHTML); // returns the outer HTML of the element

// 7. firstChild
console.log(document.querySelector("body").firstChild); // returns the first child of the element, ignore #text nodes

// 8. lastChild
console.log(document.querySelector("body").lastChild); // returns the last child of the element, ignore #text nodes

// 9. childNodes
console.log(document.querySelector("body").childNodes); // returns the child nodes of the element

// 10. children
console.log(document.querySelector(".container").children); // returns the children of the element

// Question 1: Create a H2 heading element with text - "Hello JavaScript".Append "from Apna College students" to this text using JS

const h2 = document.createElement("h2"); // create a new h2 element
h2.innerText = "Hello JavaScript"; // set the inner text of the h2 element
document.body.appendChild(h2); // append the h2 element to the body
h2.append(" from Apna College students"); // append the text to the h2 element

// DOM Manipulation

// CREATE ELEMENTS
// 1. getAttribute
console.log(document.querySelector("#heading").getAttribute("id")); // returns the value of the attribute of the element

// SET ATTRIBUTES
// 2. setAttribute
document.querySelector("#heading").setAttribute("id", "heading2"); // sets the value of the attribute of the element

// 3. style
console.log(document.querySelector("#heading2").style); // returns the style of the element
document.querySelector("#heading2").style.backgroundColor = "red"; // sets the background color of the element

// INSERT ELEMENTS
// 4. append
let ele = document.createElement("h3");
ele.innerText = "Today was the exam mostly verififed and tested";
document.body.append(ele); // append the element to the body

// 4.1 appendChild
document.body.appendChild(ele); // append the element to the body (deprecated) means it is not recommended to use this method

// 5. prepend
document.body.prepend(ele); // prepend the element to the body at the start of node inside

// 6. before
document.body.before(ele); // insert the element before the body node (outside the body)

// 7. after
document.body.after(ele); // insert the element after the body node (outside the body)

// REMOVE ELEMENTS
// 8. remove
document.querySelector("h3").remove(); // remove the element from the body

// 9. removeChild
document.body.removeChild(document.body.querySelector("button")); // remove the element from the body (deprecated) means it is not recommended to use this method

// Question 1: Create a new button element . Give it a text "Click me", background color of red and text color of white , insert the bitton as the first elemnet inside the body tag

let btn2 = document.createElement("button");

btn2.innerText = "Click me";
btn2.style.backgroundColor = "red";
btn2.style.color = "white";

document.body.prepend(btn2);

// Question 2: Create a <p> tag in js, give it a class & some styling . Now create a new class in CSS and try to append this class to the <p> element .
// Solve using classList property

let p2 = document.createElement("p");
p2.innerText = "This is a paragraph for you!";

p2.setAttribute("class", "para2");

p2.classList.add("para3"); // add,remove, toggle, contains, replace

document.body.prepend(p2);

```

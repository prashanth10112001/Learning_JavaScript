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
    <!-- These are inline events handling in HTML which is not better way to handle -->
    <!-- onclick is used to add a click event -->
    <button onclick="console.log('Button Clicked')">Click ME</button>
    <!-- ondblclick is used to add a double click event -->
    <button ondblclick="console.log('Double Clicked');alert('Double Clicked')">
      click me double
    </button>
    <div onmouseover="console.log('Mouse Enter')">inside the div</div>

    <button class="btn">Click me new</button>
    <div class="div">Div clicked</div>
    <!-- JavaScript -->
    <script src="/script.js"></script>
    <!--  -->
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
// Events In JS
// The change in the state of an object is called an event. The event can be a mouse click, a key press, or a change in the value of an input field. In JavaScript, we can use event listeners to listen for these events and execute code when they occur.

// JS script is considered over inline js events.

// If an event occurs once , then you can't use twice.If used more then last logic is made final.These are for inline js events.

// 1.The addEventListener()
// It is a method is used to attach an event handler to an element. The syntax is as follows:

let btn = document.body.querySelector(".btn");
btn.addEventListener("click", () => {
  console.log("new btn clicked");
});

btn.onclick = () => {
  console.log("btn clicked new method");
};

// 2. onmouseover
// The onmouseover event occurs when the mouse pointer is moved onto an element. The syntax is as follows:

let div = document.body.querySelector(".div");
div.onmouseover = () => {
  console.log("mouse over div");
};

// Event Object

// It is a special object that has details about the event.

// All events handlers have access to the event object's properties and methods.

div.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.target); // The target property returns the element that triggered the event.
  console.log(event.type); // The type property returns the type of event that occurred.
});

div.removeEventListener("click", (event) => {
  // console.log(event);
  // console.log(event.target); // The target property returns the element that triggered the event.
  // console.log(event.type); // The type property returns the type of event that occurred.
  console.log("Event removed");
});

let btn3 = document.createElement("button");
btn3.innerText = "Toggle Dark Mode";
document.body.appendChild(btn3);

let mode = "light";

btn3.addEventListener("click", () => {
  if (mode == "light") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    mode = "dark";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    mode = "light";
  }
});

```

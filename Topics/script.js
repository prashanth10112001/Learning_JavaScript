/*

  ------------------
||  "Fetch API"     ||
  ------------------

-> The fetch API provides an interface for fetching ( sending / receiving ) resources.

-> API : Application Programming Interface

-> It uses "Request" and "Response" objects.

-> The fetch() method is used to fetch a resource ( data ).

-> The fetch() method returns a Promise object.

-> Syntax : let promise = fetch(url, [options]);

-> Naturally to fetch data we use / by default it is GET request.

-> BY fetching we get the url and other options , but to get the data we need to understand some terms.

-> "AJAX" : Asynchronous JavaScript And XML

-> "JSON" : JavaScript Object Notation

-> json() method : returns a second promise that resolves with the result of parsing the response body text as JSON. ( Input is JSON, output is JS object ).

*/

let API_URL = "https://catfact.ninja/fact";
let p = document.getElementById("facts");
let btn = document.querySelector("#btn1");

// Method 1 : Using Async Await
const getFacts = async () => {
  let promise = await fetch(API_URL); // to get data we need to parse to .json()
  let data = await promise.json();
  p.innerText = data.fact;
  console.log(data);
};

// Method 2 : Using .then promises
function getFacts2() {
  fetch(API_URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      p.innerText = data.fact;
    });
}

// btn.addEventListener("click", getFacts);
btn.addEventListener("click", getFacts2);

/*

  -----------------------------
||  "Requests And Response"     ||
  -----------------------------

-> HTTP : HyperText Transfer Protocol

-> HTTP response headers also contain details about the responses, such as "content type" , "HTTP status code" etc.

-> "HTTP Verbs" : GET, POST, PUT, DELETE, PATCH

-> "HTTP Status Codes" : 200, 201,300, 404, 500

-> 200 : OK
-> 201 : Created
-> 300 : Multiple Choices
-> 400 : Bad Request
-> 404 : Not Found
-> 500 : Internal Server Error


-> 1) Informational responses ( 100 - 199 )
-> 2) Successful responses ( 200 - 299 )
-> 3) Redirection messages ( 300 - 399 )
-> 4) Client error responses ( 400 - 499 )
-> 5) Server error responses ( 500 - 599 )

*/

/*

-----------------
||  "Axios"     ||
-----------------

link for axios : <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

or

to install : npm install axios

-> Library to make HTTP requests.

-> In fetch we have to parse the response to JSON manually.

-> Axios automatically parse the response to JSON.

*/

const h3 = document.getElementById("fact");
const btn2 = document.querySelector("#btn2");

async function getFacts3() {
  let res = await axios.get(API_URL);
  console.log(res);
  h3.innerText = res.data.fact;
}

btn2.addEventListener("click", getFacts3);

// Using headers

let btn3 = document.querySelector("#btn3");
let joke = document.querySelector("#joke");

const API_URL2 = "https://icanhazdadjoke.com/";

async function getJokes() {
  try {
    const config = { headers: { Accept: "application/json" } };
    let res = await axios.get(API_URL2, config);
    console.log(res);
    joke.innerText = res.data.joke;
  } catch (err) {
    console.log(err);
  }
}

btn3.addEventListener("click", getJokes);

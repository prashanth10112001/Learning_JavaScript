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
// Callbacks and Promises

// async await >> promise chains >> callback hell

/*
------------------------------------
-----------------
"Sync in JS"
-----------------

"Synchronous"

-> Synchronous means the code runs in a particular sequence of instructions given in the program.

-> Each instruction waits for the previous instruction to complete its execution.

------------------------------------

"Asynchronous in JS"

-> Due to synchronous programming, something important instructions get blocked due to some previous instructions , which causes a delay in the UI.

-> Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

------------------------------------

*/

// These are synchronous operations
console.log("First");

console.log("Second");

console.log("Third");

function greet() {
  console.log("Hello");
}

greet();

/* setTimeout() */

// Method - 1 : Using setTimeout()
setTimeout(greet, 2000);

// Method - 2 : Using setTimeout() with inside function
setTimeout(() => {
  console.log("Hello, Good morning");
}, 1000);

// As the setTimeout are taking time so they kept aside parallely run and the console.log() statement will be executed first.
console.log("Fourth");

/*

"Callbacks"

-> A callback is a function passed as an argument to another function.

-> The function that is passed as an argument to another function is called a callback function.

-> No need to send function with parenthesis when passing as an argument.


*/

function sum(a, b) {
  console.log(a + b);
}

function calc(a, b, sumCallback) {
  sumCallback(a, b);
}

// Method - 1 : Using Callbacks
calc(2, 3, sum);

// Method - 2 : Using Callbacks with inside function
calc(6, 4, (a, b) => {
  console.log(a + b);
});

/*

"Callback Hell"

-> Nested callbacks stacked below one another forming a pyramid structure. ( pyramid of doom )

-> This style of programming becomes difficult to understand and manage.

*/

// nesting

// Like this nesting can be done in the callbacks

let age = 19;
if (age >= 18) {
  if (age >= 60) {
    console.log("You can vote:Senior");
  } else {
    console.log("You can vote:Adult");
  }
} else {
  console.log("You can't vote");
}

// If we want a data to be fetched from web,so it takes time to fetch the data.So lets say we use setTimeout to fetch the data.

function getData(dataId) {
  setTimeout(() => {
    console.log("Data received", dataId);
  }, 2000); // 2 seconds
}

getData(1);

// Now if we want to fetch the data like
//data 1
//data 2
//data 3

// If we execute like this then it will take only 2 seconds to fetch all the data.Because they are executed paralley.
getData(2); //2s
getData(3); //2s
getData(4); //2s

// But if we want like after fetching data 2 then we want to execute data 3 then data 4 we cant get from the above code.

// To get individual delay to execute we need to use callbacks.
// So we send our function as an argument to another function and excute it after the completion of the code then after another.

let seconds = 2;

function fetchData(dataId, callNextFunction) {
  setTimeout(() => {
    console.log("Data received", dataId, "after", seconds, "seconds");
    seconds += 2;
    callNextFunction();
  }, 2000);
}
// Method -1 : Using Callbacks
/*

-> This will execute inside function immediately, which will cause error.

-> As we pass the function as an argument to another function without parenthesis.

-> But in method - 1 we used parenthesis to pass the function as an argument to another function, so it leads to an error.

-> To solve this issue we use callbacks with arrow function.

*/
// fetchData(1, fetchData(2, fetchData(3, fetchData(4))));

// Method -2 : Using Callbacks
fetchData(1, () => {
  fetchData(2, () => {
    fetchData(3, () => {
      fetchData(4, () => {});
    });
  });
});

/*

-> As this is very complex to understand while we use very hard code.

-> As this structure inside callback inside another callback inside another callback, this is called callback hell.

-> To solve this issue we use promises.

*/

/*

-----------------
"Promises"
-----------------

Syntax : let promise = new Promise((resolve,reject)=>{})

-> Promise is for "eventual" completion of task. It is an "object" in JS.

-> Promise contains function with 2 handlers.

-> It is a  solution to callback hell.

-> It is a way to handle asynchronous operations.

-> resolve & reject are callbacks provided by the promise.

-> resolve is like success and reject is like failure.

-> Promise contains 3 states they are
1) pending : the result is undefined
2) fulfilled : the result is a value ( Fullfilled )  resolve(result).
3) rejected : the result is an error ( Rejected ) reject(error).

-> generally we not create the promises . we get the promises from the API. like let result = getAPIData(1, () => {});

-> To use the returned promises result we use .then() & .catch().

*/

let promise = new Promise((res, rej) => {
  console.log("Promise is created -- > ");
});

/*

when we run promise in the console it shows like

Promise {<pending>}
-->[[Prototype]]: Promise
-->[[PromiseState]]: "pending"
-->[[PromiseResult]]: undefined

*/

// So if we want to resolve the promise then we do like

promise = new Promise((res, rej) => {
  console.log("Promise is created next time to resolve-- > ");

  res("Fullfilled");
});

/*

when we run promise in the console it shows like

Promise {<fulfilled>: 'Fullfilled'}
[[Prototype]] : Promise
[[PromiseState]] : "fulfilled"
[[PromiseResult]] : "Fullfilled"

*/

// Similarly we can reject the promise

// promise = new Promise((res, rej) => {
//   console.log("Promise is created next time to reject-- > ");

//   rej("Some error occured so it isRejected");
// });

/*

when we run promise in the console it shows like

Promise {<rejected>: 'Rejected'}
[[Prototype]] : Promise
[[PromiseState]] : "rejected"
[[PromiseResult]] : "Rejected"

*/

// For fetching the data through API we use promises , so while fetching data we get the result as a promise.

function getAPIData(dataId, getNextData) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Data received with promise ", dataId);
      res(getNextData);
      //   rej("Network error");
    }, 2000);
  });
}

getAPIData(1, () => {});

// generally we not create the promises . we get the promises from the API. like..

let result = getAPIData(1, () => {});

// To use the returned promises result we use .then() & .catch().

// result.then((res) => {...});

// result.catch((err) => {...});

result.then((res) => {
  console.log("promise resolved or fullfilled", res);
});

result.catch((err) => {
  console.log("promise rejected", err);
});

// We have learned all this for promise chains in JS.

function asyncFunc1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Async function is called some data1");
      res("success");
    }, 4000);
  });
}

function asyncFunc2() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Async function is called some data2");
      res("success");
    }, 4000);
  });
}

// Here we want to fetch data 1 then data 2 then data 3 then data 4 and so on using promise chains.

// Method - 1 :

// console.log("fetching data 1");
// let p1 = asyncFunc1();
// p1.then((res) => {
//   console.log("fetching data1 completed");
//   console.log("fetching data 2");

//   let p2 = asyncFunc2();
//   p2.then((res) => {
//     console.log("fetching data2 completed");
//   });
// });

// Method - 2 :

console.log("fetching data 1");
asyncFunc1().then((res) => {
  console.log("fetching data1 completed");
  console.log("fetching data 2");

  asyncFunc2().then((res) => {
    console.log("fetching data2 completed");
  });
});

// We can use promise chaining like this no need to give another function as an argument to another function.

function getDataFunc(dataId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Promise chaining data received ", dataId);
      res("Success");
      //   rej("Network error");
    }, 2000);
  });
}

// Method - 1 :
// getDataFunc(1).then(() => {
//   getDataFunc(2).then(() => {
//     getDataFunc(3).then(() => {
//       getDataFunc(4).then(() => {});
//     });
//   });
// });

// Method - 2

getDataFunc(1)
  .then((res) => {
    return getDataFunc(2);
  })
  .then((res) => {
    return getDataFunc(3);
  })
  .then((res) => {
    return getDataFunc(4);
  })
  .then((res) => {
    console.log("Promise chaining completed", res);
  });

// These promise chains are easier than callback hell , but the problem with promise chains is that they are hard to read and manage.

// So to solve this we use async await

/*

-----------------
"Async Await"
-----------------

Syntax : async function functionName(){
  await promise1;
  await promise2;
  await promise3;
  await promise4;
}

-> async function always returna a promise.

-> await keyword is used to wait for the promise to resolve.

-> await pauses the execution of its surrounding async function until the promise is settled.

-> await can be used inside the async function only.

*/

async function hello() {
  console.log("Hello async function");
}

/*

async always returns a promise

when we run this function in the console it shows like

hello();
Hello async function

Promise {<fulfilled>: undefined}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: undefined

*/

function api(dataId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("weather data received", dataId);
      res("success weather data");
    }, 2000);
  });
}

async function getWeatherData() {
  await api(1); // excute first
  await api(2); // excute second
  await api(3); // excute third
}

/*


-----------------
"Callbacks"
-----------------

1) callback hell

getDataFunc(1, () => {
  getDataFunc(2, () => {
    getDataFunc(3, () => {
      getDataFunc(4, () => {});
    });
  });
});

2) promise chaining

getDataFunc(1)
  .then((res) => {
    return getDataFunc(2);
  })
  .then((res) => {
    return getDataFunc(3);
  })
  .then((res) => {
    return getDataFunc(4);
  })
  .then((res) => {
    console.log("Promise chaining completed", res);
  });


3) async await

function api(dataId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("weather data received", dataId);
      res("success weather data");
    }, 2000);
  });
}

async function getWeatherData() {
  await api(1); // excute first
  await api(2); // excute second
  await api(3); // excute third
}


-> As in the callback hell, promise chaining we dont need extra function to call but in async await we need extra unnecessary function to call.

-> So we can solve this unnecessary function call using IIFE.

-> IIFE : Immediately Invoked Function Expression

-> IIFE is a function that is called immediately as soon as it is defined.
-> IIFE is used to create a self-executing function and avoid polluting the global namespace.

function api(dataId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("weather data received", dataId);
      res("success weather data");
    }, 2000);
  });
}

(async function () {
  await api(1); // excute first
  await api(2); // excute second
  await api(3); // excute third
})();

*/

function api(dataId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("weather data received Prashanth hi there", dataId);
      res("success weather data");
    }, 2000);
  });
}

(async function () {
  await api(1); // excute first
  await api(2); // excute second
  await api(3); // excute third
})();

```

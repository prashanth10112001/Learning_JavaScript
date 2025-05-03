### HTML

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
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
// Classes And Objects

/*--------------------------------------- */
/*  Prototypes In JS */

/*
--> A javascript object is an entity having state and behaviour ( properties and method ).
JS objects have a special property called "prototype".
We can set prototype using __proto__ property.
If object & prototype have same method , objects's method will be used.

--> __proto__ is a reference to an object .
*/

/*--------------------------------------- */

const student = {
  name: "paisa",
  age: 23,
  printMarks: function () {
    console.log("marks method", this.age);
  },
};

console.log(student);
console.log(student.name); // paisa
console.log(student.age); // 23
student.printMarks(); // marks method 23

const employee = {
  calcTax() {
    console.log("tax method 10%");
  },
  calcTax1: function () {
    console.log("tax method 20%");
  },
};

const karan = {
  salary: 20000,
  calcTax() {
    console.log("tax method 10% for arun now.");
  },
};

const arun = {
  salary: 10000,
};

const varun = {
  salary: 40000,
};

// This creates a link between karan and employee , where karan can have the employee methods.
// Reference to an object.
karan.__proto__ = employee;
karan.calcTax(); // tax method 10%
karan.calcTax1(); // tax method 20%

arun.__proto__ = employee;
varun.__proto__ = employee;

// Classes

/* -------------------------------------- */
/*
  Class is a program-code template for creating objects.

  Class is a template for creating objects.

  Those objects will have some state ( variables ) & some behaviour ( functions ) inside it.

  constructor is a special method used to initialize the state of the object when it is created.

  constructor is automatically invoked by new.

  */
/* -------------------------------------- */

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  printMarks() {
    console.log("marks method", this.age);
  }
}

const student1 = new Student("Paisa", 23);
console.log(student1);
console.log(student1.name); // paisa
console.log(student1.age); // 23
student1.printMarks(); // marks method 23

class ToyotaCar {
  constructor(model, year) {
    console.log("constructor called");

    this.model = model;
    this.year = year;
  }

  start() {
    console.log("car started", this.year ?? "No-Year");
  }

  stop() {
    console.log("car stopped", this.model ?? "No-Model");
  }

  setModel(model) {
    this.model = model;
  }
}

let fortuner = new ToyotaCar();
fortuner.start();
fortuner.stop();

let swift = new ToyotaCar("swift", 1999);
swift.start();
swift.stop();

swift.setModel("maruthi");
swift.stop();

/*

  Inheritance in JS

  inheritance is passing down properties &methods from parent class to child class.

  For inheriting properties & methods from parent class to child class we use "extends" keyword.

  If child methods( derived class ) and parent ( base class ) methods are same then childs method will be used.--->[ Method Overriding ]


  "super" keyword

  The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

  super(args);

  super.parentMethod(args);


  */

class Animal {
  constructor(name, legs) {
    this.name = name;
    this.legs = legs;
  }

  countLegs() {
    console.log("The animal", this.name, " has", this.legs, "legs");
  }

  sayName() {
    console.log(this.name);
  }
}

class lion extends Animal {
  constructor(name, legs) {
    super(name, legs);
  }
  sayName() {
    console.log("My name is", this.name);
  }
}

let lion1 = new lion("Lion", 4);
lion1.countLegs();
lion1.sayName();

/*Question 1*/
/*
  You are creating a website for your college. Create a class User with 2properties , name and email. It also has a method called viewData() that allows users to view website data.
  */

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log("This is my name", this.name, "and my email is", this.email);
  }
}

let user1 = new User("Paisa", "paisa@gmail.com");
user1.viewData();

/*Question 2*/
/*
  Create a new class called  Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.
  */
class Admin extends User {
  //   constructor() {
  //     super();
  //   }

  editData(name, email) {
    this.email = email;
    this.name = name;
    console.log("Data edited");
  }
}

let admin1 = new Admin();
admin1.editData("Raju", "Raju@gmail.com");
admin1.viewData();

/*Error Handling*/
/*
  try {

  }catch(error) {

  }
  */

try {
  console.log(10 / 0);
} catch (error) {
  console.log(error);
} finally {
  console.log("Error Handled");
}

console.log("Error is Handled and executing next lines.");

```

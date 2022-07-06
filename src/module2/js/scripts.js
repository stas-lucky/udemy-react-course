import { add, sub } from "./utils.js";

console.log(add(2, 3));
console.log(sub(2, 3));

class Human {
  constructor() {
    this.gender = "male";
  }
  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = "Stas";
  }

  surname = "Rom";

  printName() {
    console.log(this.name + " " + this.surname);
  }

  myMethod = () => {};
}

let person = new Person();
person.printGender();
person.printName();

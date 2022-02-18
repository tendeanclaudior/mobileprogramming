// import & export

// export
let name = "CLaudio"

let student = {
    name: "Claudio",
    age: 20,
    faculty: "Ilmu Komputer",
};

function sayHallo(user) {
    console.log(`Hallo, ${user}`);
}
export {name, student, sayHallo };

// import
import { name, student, sayHallo } from "./export";

console.log(name);
console.log(student);
console.log(sayHallo);

// exportAS
const tumbuhan = "Kubis";

let student = {
    name: "Claudio",
    age: 20,
    faculty: "Ilmu Komputer",
};

function sayHallo(user) {
    console.log(`Hallo, ${user}`);
}
export {tumbuhan as plant, student, sayHallo };

// importAS
import { plant, student, sayHallo } from "./exportAS";

console.log(plant);
console.log(student);
console.log(sayHallo);

export const favoritePlant = "Kentang";

export let newStudent = {
    name: "Vini",
    Age: 20,
    faculty: "Ilmu Komputer",
};

function sayHallo(user) {
    console.log(`Hallo, ${user}`);
}
console.log(favoritePlant);
console.log(newStudent);
console.log(sayHallo);

// ExportDefault

function yourName(user) {
  console.log(`Inka, ${user}`);
}

export default yourName;

// Asyncronous

// setTimeout
setTimeout(() => {
    console.log("Beli Mobil");
}, 2000)

console.log("Rental Mobil");
console.log("Cash Mobil");
console.log("Credit Mobil");

// Promise
let newPromise = new Promise((resolve, reject) => {
    if (true) {
      // apa yang dilakukan jika promise fulfilled
      resolve("Berhasil");
    } else {
      // apa yang dilakukan jika promise rejected
      reject("Gagal");
    }
});

// then
const condition = true;

let newPromise = new Promise((resolve, reject) => {
  if (condition) {
    // apa yang dilakukan jika promise 'fulfilled'
    resolve("Berhasil");
  } else {
    // apa yang dilakukan jika promise 'rejected'
    reject("Gagal");
  }
});

newPromise.then((result) => {
  return result;
})
.then((result2) => {
  console.log(result2 + "!!"); // Output: Berhasil!!
});

// async
// async menggunakan keyword function 
async function tesAsyncAwait() {
    return "Fulfilled";
  }
  
  console.log(tesAsyncAwait());
  // async menggunakan arrow function
  const tesAsyncAwait = async () => {
    return "Fulfilled";
  };
  
  console.log(tesAsyncAwait());

// class
class Person {
    constructor(firstName, lastName, dob) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.dob = new Date(dob);
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  
  // instantiate an object
  const p1 = new Person('Hiskia', 'Bororing', '01-01-2001');
  console.log(p1.getFullName());
  console.log(p1.dob.getFullYear());
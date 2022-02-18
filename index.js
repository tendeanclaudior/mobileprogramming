// 1. Pormise

function helloWorld() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("HellowWorld!");
      }, 2000);
    });
}

async function massages() {
    console.log("HelloWorld!");
    const msg = await helloWorld();
    console.log(msg);
}

massages();

// 2. Fetch

function ambilDatauser(){}
fetch('https://reqres.in/api/users')
.then(Response => Response.json())
.then(user => console.log(user))
ambilDatauser;

// 3 Async Await

async function ambilDatauser(){
    let Response = await fetch()
    Response = await Response.json()
    console.log(Response);
}

// 4. Class

// class
class Person {
    constructor(firstName, dob) {
      this.firstName = firstName;
      this.dob = new pekerjaan(dob);
    }
  
    getFullName() {
      return `${this.firstName}`;
    }
}
  
  // instantiate an object
  const p1 = new Person('Anastacia kuron', 'Sedang bekerja seperti biasa');
  console.log(p1.getFullName());
  console.log(p1.dob.getpekerjaan());

// 5. inheritance
let person = {
    name: "",
    age: "",
    kode_mobil: function () {
        return this.name[0] + this.age[0];
    }
};

let person1 = Object.create(person);
person1.name = "Anastacia";
person1.age = "19";

console.log(person1);